import { Injectable } from '@nestjs/common';
import { AuthotpProvider } from './authotp.provider';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';
@Injectable()
export class AuthService {
  constructor(
    /**
     * Injecting AuthotpProvider in service
     */
    private readonly authOtpProvider: AuthotpProvider,
  ) {}
  public async otpVerification(verifyOtpDto: VerifyOtpDTO) {
    return await this.authOtpProvider.otpVerification(verifyOtpDto);
  }
}
