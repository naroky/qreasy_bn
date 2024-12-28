import { Controller, Post, Body } from '@nestjs/common';
import { RecaptchaService } from './recaptcha.service';

@Controller('recaptcha')
export class RecaptchaController {
  constructor(private readonly recaptchaService: RecaptchaService) {}

  @Post('verify')
  async verifyCaptcha(@Body('token') token: string): Promise<{ success: boolean }> {
    const isHuman = await this.recaptchaService.validateToken(token);
    return { success: isHuman };
  }
}
