import { Module } from '@nestjs/common';
import { ApiRequestsService } from './api-requests.service';
import { ApiRequestsController } from './api-requests.controller';
import { ConfigModule } from '@nestjs/config';
import { AxiosAdapter } from './adapters/axios.adapter';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiComments, ApiCommentsSchema } from './schemas/ApiComments';

@Module({
  controllers: [ApiRequestsController],
  providers: [ApiRequestsService, AxiosAdapter],
  imports: [ConfigModule,
    MongooseModule.forFeature([
      { name: ApiComments.name, schema: ApiCommentsSchema }
    ]),
  ],
  exports: [MongooseModule]
})
export class ApiRequestsModule { }
