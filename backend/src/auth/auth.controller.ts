import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';

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
}
