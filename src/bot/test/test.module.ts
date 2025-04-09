import { Module } from '@nestjs/common';
import { TestCommands } from './test.commands';

@Module({
  providers: [TestCommands],
})
export class TestModule {}
