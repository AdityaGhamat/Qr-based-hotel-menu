import { Controller, Post, Body, Patch } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';
import { ResendOtpDTO } from 'src/shared/dto/resend-otp.dto';

@Controller('auth')
export class AuthController {
  constructor(
    /**
     * Injecting otp service
     */
    private readonly authservice: AuthService,
  ) {}
  @Post('verify-otp')
  public async verifyOtp(@Body() verifyOtpDto: VerifyOtpDTO) {
    return this.authservice.otpVerification(verifyOtpDto);
  }
  @Patch('resend-otp')
  public async resendOtp(@Body() resendOtpDto: ResendOtpDTO) {
    return this.authservice.otpResend(resendOtpDto);
  }
}
