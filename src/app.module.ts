import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NecordModule } from './modules/necord/necord.module';
import { BotModule } from './bot/bot.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [NecordModule, BotModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
