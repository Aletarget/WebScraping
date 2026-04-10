import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { TwitterUrl } from './queryData/dataForQuery';
import { ConfigService } from '@nestjs/config';
import { TwitterAPIResponse } from './interfaces/twitterApiResponse.interface';
import { Model } from 'mongoose';
import { ApiComments } from './schemas/ApiComments';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ApiRequestsService {
    constructor(
        private readonly axiosAdapter: AxiosAdapter,
        private readonly configService: ConfigService,
        @InjectModel(ApiComments.name)
        private readonly twitterApi: Model<ApiComments>
    ){}

    async getTwitterApiRequest(){
        const {data} = await this.axiosAdapter.get<TwitterAPIResponse>(TwitterUrl, {x_api_key: this.configService.get('TWITTERAPI_KEY')!})
        await this.twitterApi.create(data);
        return data;
    }
}
