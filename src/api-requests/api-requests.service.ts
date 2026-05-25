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
    private readonly Queries = Queries;
    constructor(
        private readonly axiosAdapter: AxiosAdapter,
        private readonly configService: ConfigService,
        @InjectModel(ApiComments.name)
        private readonly twitterApi: Model<ApiComments>,
    ) { }

    async getTwitterApiRequest() {
        const queriesResponse: TwitterAPIResponse[] = await Promise.all(
            Queries.map(async (query) => {
                const { data } = await this.axiosAdapter.get(
                    TwitterUrl,
                    {
                        x_api_key: this.configService.get('TWITTERAPI_KEY')!,
                    },
                    query.query
                );

                return data as TwitterAPIResponse;
            })
        );
        const unifyTweets: Tweet[] = []
        queriesResponse.forEach((res) => {
            res.tweets.forEach((tweet) => {
                unifyTweets.push(tweet)
            })
        })
        await this.twitterApi.create({
            tweets: unifyTweets,
            date: Date.now().toString()
        })
        return unifyTweets;
    }
}
