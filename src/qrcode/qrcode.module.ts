import { Module } from '@nestjs/common';
import { QrCodeController } from './qrcode.controller';
import { QrCodeService } from './qrcode.service';
import { RecaptchaService } from '../recaptcha/recaptcha.service';
@Module({
  imports: [],
  providers: [QrCodeService,RecaptchaService],
  controllers: [QrCodeController], // add user controller

})

export class QrCodeModule {}
