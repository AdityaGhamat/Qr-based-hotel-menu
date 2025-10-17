import { Inject, Injectable } from '@nestjs/common';
import { OtpProvider as AdminOtpProvider } from 'src/admin/provider/otp.provider';
import { ResendOtpDTO } from 'src/shared/dto/resend-otp.dto';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';
import { TokenGenerationProvider } from './token-generation.provider';
import { Response } from 'express';
import {
  cookieOptions,
  refreshTokenOptions,
} from '../constants/cookie.constant';

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
  public async otpVerification(
    verifyOtpDto: VerifyOtpDTO,
    response?: Response,
  ) {
    const admin = await this.adminOtpProvider.otpVerification(verifyOtpDto);

    const tokens = await this.tokenGenerationProvider.generateTokens(admin);
    response.cookie('access_token', `${tokens.accesssToken}`, cookieOptions);
    response.cookie(
      'refresh_token',
      `${tokens.refreshToken}`,
      refreshTokenOptions,
    );
    return tokens;
  }
  public async otpGeneration(email: string) {
    return await this.adminOtpProvider.otpGeneration(email);
  }
}
