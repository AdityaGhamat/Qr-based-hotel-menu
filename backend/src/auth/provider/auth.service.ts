import { Injectable } from '@nestjs/common';
import { AuthotpProvider } from './authotp.provider';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';
import { ResendOtpDTO } from 'src/shared/dto/resend-otp.dto';
import { ResendotpProvider } from './resendotp.provider';
@Injectable()
export class AuthService {
  constructor(
    /**
     * Injecting AuthotpProvider in service
     */
    private readonly authOtpProvider: AuthotpProvider,
    /**
     * Injecting otpresendProvider in service
     */
    private readonly resendOtpProvider: ResendotpProvider,
  ) {}
  public async otpVerification(verifyOtpDto: VerifyOtpDTO) {
    return await this.authOtpProvider.otpVerification(verifyOtpDto);
  }
  public async otpResend(resendOtpDto: ResendOtpDTO) {
    return await this.resendOtpProvider.resendOtp(resendOtpDto);
  }
}
