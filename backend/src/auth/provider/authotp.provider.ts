import { Inject, Injectable } from '@nestjs/common';
import { OtpProvider as AdminOtpProvider } from 'src/admin/provider/otp.provider';

@Injectable()
export class AuthotpProvider {
  constructor(
    /**
     * Injecting AdminOtpProvider
     */
    private readonly adminOtpProvider: AdminOtpProvider,
  ) {}
  public async otpVerification(otp: string, admin_id: number) {
    return await this.adminOtpProvider.otpVerification(otp, admin_id);
  }
}
