import { Module } from '@nestjs/common';
import { ApiRequestsModule } from './web-scraping-requests/web-scraping-requests.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    ScheduleModule.forRoot(),
    ApiRequestsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
