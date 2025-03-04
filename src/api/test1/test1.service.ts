import { Injectable } from '@nestjs/common';
import { ChannelType, Client } from 'discord.js';

@Injectable()
export class Test1Service {
  public constructor(private readonly client: Client) {}
  // channelId: string, message: string
  public async check(): Promise<void> {
    const channel = this.client.channels.cache.get('1343877837144461343');
    if (channel.type === ChannelType.GuildText) {
      await channel.send(`bla`);
    }
  }
}
