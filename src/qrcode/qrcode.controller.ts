import { Body, Controller,Post } from '@nestjs/common';
import { QrCodeService } from './qrcode.service';
import { RecaptchaService } from '../recaptcha/recaptcha.service';
@Controller('qrcode')

export class QrCodeController {
    constructor(private readonly qrCodeService: QrCodeService,private readonly recaptchaService: RecaptchaService) {}
    
    @Post()
    async generateQrCode(@Body() data: any) {
      const { url, googletoken } = data;
      const isHuman = await this.recaptchaService.validateToken(googletoken);

      console.log(url);
      console.log(googletoken);
      let qrcode;
      if (isHuman) {
        qrcode = await this.qrCodeService.generateQrCode(url);
      }
      else
      {
        qrcode = "none"
      }
      let res = {"image": qrcode};
      return (res);
    }

    @Post('qronly')
    async qronly(@Body() data: any) {
      const {url} = data;
      console.log(url);
      let qrcode = await this.qrCodeService.generateQrCode(url)
      let res = {"image": qrcode,
        "ishuman" : true
      };
      return (res);
    }

}