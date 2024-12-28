import { Module } from '@nestjs/common';
import { RecaptchaController } from './recaptcha.controller';
import { RecaptchaService } from './recaptcha.service';

@Module({
  controllers: [RecaptchaController],
  providers: [RecaptchaService],
})
export class RecaptchaModule {}
