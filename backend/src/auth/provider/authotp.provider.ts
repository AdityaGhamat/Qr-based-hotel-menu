import { Inject, Injectable } from '@nestjs/common';
import { OtpProvider as AdminOtpProvider } from 'src/admin/provider/otp.provider';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';

@Injectable()
export class AuthotpProvider {
  constructor(
    /**
     * Injecting AdminOtpProvider
     */
    private readonly adminOtpProvider: AdminOtpProvider,
  ) {}
  public async otpVerification(verifyOtpDto: VerifyOtpDTO) {
    return await this.adminOtpProvider.otpVerification(verifyOtpDto);
  }
}
