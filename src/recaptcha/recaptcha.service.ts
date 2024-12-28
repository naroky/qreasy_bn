import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RecaptchaService {
  private readonly RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';
  private readonly secretKey = process.env.RECAPTCHA_SECRET;

  async validateToken(token: string): Promise<boolean> {
    try {
      console.log(this.secretKey)
      const response = await axios.post(
        this.RECAPTCHA_URL,
        new URLSearchParams({
          secret: this.secretKey,
          response: token,
        }),
      );
      return response.data.success; // สำเร็จเมื่อ response.success = true
    } catch (error) {
      console.error('Error validating reCAPTCHA:', error);
      return false;
    }
  }
}
