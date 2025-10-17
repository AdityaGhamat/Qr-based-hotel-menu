import { Controller, Post, Body, Patch, Res } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';
import { ResendOtpDTO } from 'src/shared/dto/resend-otp.dto';
import { Auth } from './decorator/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    /**
     * Injecting otp service
     */
    private readonly authservice: AuthService,
  ) {}
  @Post('verify-otp')
  @Auth(AuthType.None)
  public async verifyOtp(
    @Body() verifyOtpDto: VerifyOtpDTO,
    @Res() response: Response,
  ) {
    const result = await this.authservice.otpVerification(
      verifyOtpDto,
      response,
    );
    return response.json(result);
  }
  @Patch('resend-otp')
  @Auth(AuthType.None)
  public async resendOtp(@Body() resendOtpDto: ResendOtpDTO) {
    return this.authservice.otpResend(resendOtpDto);
  }
}
