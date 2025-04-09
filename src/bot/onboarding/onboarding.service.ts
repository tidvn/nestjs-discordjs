import { Injectable, Logger } from '@nestjs/common';
import { Context, ContextOf, On } from 'necord';

@Injectable()
export class OnboardingService {
  private readonly logger = new Logger(OnboardingService.name);

  @On('guildMemberAdd')
  public onGuildMemberEntered(
    @Context() [member]: ContextOf<'guildMemberAdd'>,
  ) {
    console.log(member.user.globalName);
  }
}
