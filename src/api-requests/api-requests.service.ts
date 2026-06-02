import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { Queries, TwitterUrl } from './queryData/dataForQuery';
import { ConfigService } from '@nestjs/config';
import { Tweet, TwitterAPIResponse } from './interfaces/twitterApiResponse.interface';
import { Model } from 'mongoose';
import { ApiComments } from './schemas/ApiComments';
import { InjectModel } from '@nestjs/mongoose';
import { ApiTweets } from './interfaces/apiTwits.interface';

@Injectable()
export class ApiRequestsService {
    private readonly sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
    private readonly Queries = Queries;
    constructor(
        private readonly axiosAdapter: AxiosAdapter,
        private readonly configService: ConfigService,
        @InjectModel(ApiComments.name)
        private readonly twitterApi: Model<ApiComments>,
    ) { }

    async getTwitterApiRequest() {
        const queriesResponse: TwitterAPIResponse[] = [];

        for (const query of Queries) {
            const { data } = await this.axiosAdapter.get(
                TwitterUrl,
                {
                    x_api_key: this.configService.get('TWITTERAPI_KEY')!,
                },
                query.query
            );

            queriesResponse.push(data as TwitterAPIResponse);

            await this.sleep(6000);
        }

        const unifyTweets: Tweet[] = [];

        queriesResponse.forEach((res) => {
            res.tweets.forEach((tweet) => {
                unifyTweets.push(tweet);
            });
        });

        await this.twitterApi.create({
            tweets: unifyTweets,
            date: Date.now().toString(),
        });

        return unifyTweets;
    }
}
