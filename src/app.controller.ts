import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  appService: any;
  constructor() {
    appService: AppService
  }
  
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
