import { Module } from '@nestjs/common';
import { ReadyModule } from './ready/ready.module';
import { TestModule } from './test/test.module';
import { OnboardingModule } from './onboarding/onboarding.module';

@Module({
  imports: [ReadyModule, TestModule, OnboardingModule],
})
export class BotModule {}
