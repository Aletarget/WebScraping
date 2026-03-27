import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { WebScrapingRequestsService } from './web-scraping-requests.service';

@Controller('web-scraping-api-requests')
export class ApiRequestsController {
  constructor(private readonly WebScrapingRequestsService: WebScrapingRequestsService) {}

  // @Get()
  // getData(){
  //   return this.WebScrapingRequestsService.getTopNews();
  // } 

  @Get('scraping')
  runScraping(@Headers('x-cron-secret') secret: string) {
    if (secret !== process.env.CRON_SECRET) {
      throw new UnauthorizedException();
    }

    return this.WebScrapingRequestsService.getTopNews();
  }
}
