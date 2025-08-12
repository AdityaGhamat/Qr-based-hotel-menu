import { Injectable } from '@nestjs/common';
import { OtpProvider } from './otp.provider';
import { Admin } from '../entity/admin.entity';
import { CreateAdminDTO } from '../dto/create-admin.dto';
import { CreateAdminProvider } from './create-admin.provider';
@Injectable()
export class AdminService {
  constructor(
    /**
     * Inserting otpProvider
     */
    private readonly otpProvider: OtpProvider,
    /**
     * Inserting createAdminProvider
     */
    private readonly createAdminProvider: CreateAdminProvider,
  ) {}

  public async otpGeneration(email: string) {
    return this.otpProvider.otpGeneration(email);
  }
  public async createAdmin(createAdminDto: CreateAdminDTO) {
    return this.createAdminProvider.createAdmin(createAdminDto);
  }
}
