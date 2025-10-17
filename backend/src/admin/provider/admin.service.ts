import { Injectable } from '@nestjs/common';
import { OtpProvider } from './otp.provider';
import { Admin } from '../entity/admin.entity';
import { CreateAdminDTO } from '../dto/create-admin.dto';
import { CreateAdminProvider } from './create-admin.provider';
import { Request } from 'express';
import { GetAdminProvider } from './get-admin.provider';
import { AdminInfo } from 'src/auth/interface/admin-info.interface';
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

    /**
     * Inserting getAdminProvider
     */
    private readonly getAdminProvider: GetAdminProvider,
  ) {}

  public async otpGeneration(email: string) {
    return this.otpProvider.otpGeneration(email);
  }
  public async createAdmin(createAdminDto: CreateAdminDTO) {
    return this.createAdminProvider.createAdmin(createAdminDto);
  }
  public async getAdmin(adminId: AdminInfo['sub']) {
    return this.getAdminProvider.getAdmin(adminId);
  }
}
