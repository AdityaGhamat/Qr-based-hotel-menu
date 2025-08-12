import { Inject, Injectable } from '@nestjs/common';
import { OtpProvider as AdminOtpProvider } from 'src/admin/provider/otp.provider';
import { ResendOtpDTO } from 'src/shared/dto/resend-otp.dto';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';
import { TokenGenerationProvider } from './token-generation.provider';

@Injectable()
export class AuthotpProvider {
  constructor(
    /**
     * Injecting AdminOtpProvider
     */
    private readonly adminOtpProvider: AdminOtpProvider,
    /**
     * Injecting token generation
     */
    private readonly tokenGenerationProvider: TokenGenerationProvider,
  ) {}
  public async otpVerification(verifyOtpDto: VerifyOtpDTO) {
    const admin = await this.adminOtpProvider.otpVerification(verifyOtpDto);
    return this.tokenGenerationProvider.generateTokens(admin);
  }
  public async otpGeneration(email: string) {
    return await this.adminOtpProvider.otpGeneration(email);
  }
}
