import { Injectable } from '@nestjs/common';
import { OtpProvider } from './otp.provider';
import { Admin } from '../entity/admin.entity';
@Injectable()
export class AdminService {
  constructor(
    /**
     * Inserting otpProvider
     */
    private readonly otpProvider: OtpProvider,
  ) {}

  public async otpGeneration(admin: Admin) {
    return this.otpProvider.otpGeneration(admin);
  }
}
