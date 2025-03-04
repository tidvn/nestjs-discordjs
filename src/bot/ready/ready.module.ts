import { Module } from '@nestjs/common';
import { NecordUpdate } from './ready.update';

@Module({
  providers: [NecordUpdate],
})
export class ReadyModule {}
