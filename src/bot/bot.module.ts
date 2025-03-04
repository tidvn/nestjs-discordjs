import { Module } from '@nestjs/common';
import { ReadyModule } from './ready/ready.module';
import { TestModule } from './test/ready.module';

@Module({
  imports: [ReadyModule, TestModule],
})
export class BotModule {}
