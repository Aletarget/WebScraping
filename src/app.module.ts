import { Module } from '@nestjs/common';
import { WebScrapingRequestsModule } from './web-scraping-requests/web-scraping-requests.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ApiRequestsModule } from './api-requests/api-requests.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    ScheduleModule.forRoot(),
    WebScrapingRequestsModule,
    ApiRequestsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
