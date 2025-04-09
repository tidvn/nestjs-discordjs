import { Module } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';

@Module({
  providers: [OnboardingService],
})
export class OnboardingModule {}
