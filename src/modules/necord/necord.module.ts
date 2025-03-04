import { NecordModule as NecordModuleBase } from 'necord';
import { Module } from '@nestjs/common';
import { IntentsBitField } from 'discord.js';
import { DISCORD_BOT_TOKEN } from 'src/app.environment';

@Module({
  imports: [
    NecordModuleBase.forRoot({
      token: DISCORD_BOT_TOKEN,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.DirectMessageReactions,
        IntentsBitField.Flags.MessageContent,
      ],
    }),
  ],
})
export class NecordModule {}
