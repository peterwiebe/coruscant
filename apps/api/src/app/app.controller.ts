import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/characters/:id')
  getCharacter(@Param() params) {
    return this.appService.getCharacter({ id: params.id });
  }

  @Get('/planets/:id')
  getPlanet(@Param() params) {
    return this.appService.getPlanet({ id: params.id });
  }
}
