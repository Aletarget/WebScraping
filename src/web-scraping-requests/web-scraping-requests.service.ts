import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { WebscrapInterface } from './interface/WebScraping.interface';
import { NewSnapshot } from './schemas/NewsSnapshot';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class WebScrapingRequestsService {
  readonly logger = new Logger('WebScrapingRequests')
  readonly BASE_URL = "https://www.gsmarena.com";

  constructor(
    @InjectModel(NewSnapshot.name)
    private readonly newsSnapshot: Model<NewSnapshot>
  ) { }

  @Cron("0 30 * * * *", {
    timeZone: 'America/Bogota'
  })
  async getTopNews() {
    try {
      const { data } = await axios.get(this.BASE_URL, {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });
      const $ = cheerio.load(data)
      const pages: string[] = [];
      $('.news-item').each((i, el) => {
        const link = $(el).find('a').attr("href");
        if (link?.startsWith('http')) {
          pages.push(link);
        } else {
          pages.push(this.BASE_URL + "/" + link);
        }
      })
      await this.getComments(pages)
    } catch (error) {
      this.logger.error(error)
    }
  }

  private async getComments(newsUrl: string[]) {
    const newsMapComments = new Map<string, string[]>()
    await Promise.all(
      newsUrl.map(async (news) => {
        const comments: string[] = [];
        const newsId = this.extractNewsId(news);
        if (!newsId) return;

        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const commentsUrl = `${this.BASE_URL}/newscomm-${newsId}p${page}.php`;

          try {
            const { data } = await axios.get(commentsUrl, {
              headers: { "User-Agent": "Mozilla/5.0" }
            });

            const $ = cheerio.load(data);
            const pageComments = $(".user-thread");

            if (pageComments.length === 0) {
              hasMore = false;
              break;
            }

            pageComments.each((i, el) => {
              const comment = $(el).find(".uopin").text().trim();
              if (comment) comments.push(comment);
            });

            page++;

          } catch (error) {
            this.logger.error(error);
            hasMore = false;
          }
        }
        newsMapComments.set(news, comments)
        console.log(`Performing WebScraping`)
      })
    );
    let NewsJson: WebscrapInterface[] = [];
    newsMapComments.forEach((comments, news) => {
      NewsJson.push(
        {
          newsLink: news,
          comments
        }
      )
    });
    await this.newsSnapshot.create({
      date: Date.now().toString(),
      news: [
        ...NewsJson
      ]
    })
  }


  private extractNewsId(url: string): string | null {
    const match = url.match(/news-(\d+)\.php/);
    return match ? match[1] : null;
  }
}