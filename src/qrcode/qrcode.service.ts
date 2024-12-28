// src/qr-code.service.ts
import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Injectable()
export class QrCodeService {
  async generateQrCode(data: string): Promise<string> {
        const qrCodeDataURL = await qrcode.toDataURL(data);
      return qrCodeDataURL;
   
  }
}