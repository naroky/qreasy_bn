import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrCodeController } from './qrcode/qrcode.controller';
import { QrCodeModule } from './qrcode/qrcode.module';
import { QrCodeService } from './qrcode/qrcode.service';
import { RecaptchaModule } from './recaptcha/recaptcha.module';
import { RecaptchaService } from './recaptcha/recaptcha.service';
import { RecaptchaController } from './recaptcha/recaptcha.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),QrCodeModule,RecaptchaModule],
  controllers: [AppController, QrCodeController,RecaptchaController],
  providers: [AppService,QrCodeService,RecaptchaService],
})
export class AppModule {}
