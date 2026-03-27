import { Module } from '@nestjs/common';
import { WebScrapingRequestsService } from './web-scraping-requests.service';
import { ApiRequestsController } from './web-scraping-requests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NewSnapshot, NewSnapshotSchema } from './schemas/NewsSnapshot';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NewSnapshot.name, schema: NewSnapshotSchema }
    ]),
  ],

  controllers: [ApiRequestsController],
  providers: [WebScrapingRequestsService],
  exports: [
    MongooseModule
  ]
})
export class ApiRequestsModule { }
