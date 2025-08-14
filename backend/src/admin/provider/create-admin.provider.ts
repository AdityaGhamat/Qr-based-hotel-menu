import { BadRequestException, Injectable } from '@nestjs/common';
import { OtpProvider } from './otp.provider';
import { CreateAdminDTO } from '../dto/create-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entity/admin.entity';
import { Repository } from 'typeorm';
import { AdminSendOtpProvider } from './send-otp.provider';
import { DataSource } from 'typeorm';
@Injectable()
export class CreateAdminProvider {
  constructor(
    /**
     * Injecting OtpProvider
     */
    private readonly otpProvider: OtpProvider,

    /**
     * Injecting admin repository
     */
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,

    /**
     * Injecting sendotp provider
     */
    private readonly adminSendOtpProvider: AdminSendOtpProvider,

    /**
     * Injecting datasource for transactions
     */
    private readonly dataSource: DataSource,
  ) {}
  public async createAdmin(createAdminDto: CreateAdminDTO) {
    const otp = this.otpProvider.generateOtp();
    const otpExpirationMinutes = 5;

    return await this.dataSource.transaction(async (manager) => {
      const existingAdmin = await manager.findOne(Admin, {
        where: { email: createAdminDto.email },
      });

      if (existingAdmin) {
        throw new BadRequestException('Admin already exists, please sign in');
      }

      const newAdmin = manager.create(Admin, {
        name: createAdminDto.name,
        email: createAdminDto.email,
        generatedOtp: otp,
        otpExpiredAt: new Date(Date.now() + otpExpirationMinutes * 60 * 1000),
      });
      await manager.save(newAdmin);
      try {
        await this.adminSendOtpProvider.sendOtp({
          email: createAdminDto.email,
          otp,
          expiry: 5,
        });
      } catch (error) {
        throw new BadRequestException(
          'Failed to send OTP, registration aborted',
        );
      }
      return { message: 'Admin created and OTP sent successfully' };
    });
  }
}
