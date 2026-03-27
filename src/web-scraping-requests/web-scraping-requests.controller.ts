import { Controller, Get } from '@nestjs/common';
import { WebScrapingRequestsService } from './web-scraping-requests.service';

@Controller('api-requests')
export class ApiRequestsController {
  constructor(private readonly WebScrapingRequestsService: WebScrapingRequestsService) {}

  // @Get()
  // getData(){
  //   return this.WebScrapingRequestsService.getTopNews();
  // } 
  
}
