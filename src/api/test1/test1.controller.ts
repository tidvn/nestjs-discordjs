import { Controller, Get } from '@nestjs/common';
import { Test1Service } from './test1.service';

@Controller('test1')
export class Test1Controller {
  constructor(private readonly test1Service: Test1Service) {}

  @Get('/test1')
  getProfile() {
    return this.test1Service.check();
  }
}
