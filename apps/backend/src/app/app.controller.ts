import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(@Query('page') page = '1') {
    return this.appService.findAll(page);
  }
}
