import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { ApiRequestsService } from './api-requests.service';

@Controller('api-requests')
export class ApiRequestsController {
  constructor(private readonly apiRequestsService: ApiRequestsService) {}

  @Get()
    runScraping(@Headers('x-cron-secret') secret: string) {
      console.log('HEADER:', secret);
      console.log('ENV:', process.env.CRON_SECRET);
      if (secret !== process.env.CRON_SECRET) {
        throw new UnauthorizedException();
      }
  
      return this.apiRequestsService.getTwitterApiRequest();
    }




}
