import { Injectable } from '@nestjs/common';
import { AuthotpProvider } from './authotp.provider';
@Injectable()
export class AuthService {
  constructor(
    /**
     * Injecting AuthotpProvider in service
     */
    private readonly authOtpProvider: AuthotpProvider,
  ) {}
  public async otpVerification(otp: string, admin_id: number) {
    return await this.authOtpProvider.otpVerification(otp, admin_id);
  }
}
