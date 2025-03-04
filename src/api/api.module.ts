import { Module } from '@nestjs/common';
import { Test1Module } from './test1/test1.module';

@Module({
  imports: [Test1Module],
})
export class ApiModule {}
