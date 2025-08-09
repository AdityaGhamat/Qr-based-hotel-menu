import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Admin } from '../entity/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OtpProvider {
  constructor(
    /**
     * Injecting admin repository
     */
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}
  public async otpGeneration(admin: Admin) {
    try {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const user = await this.adminRepository.findOneBy({ id: admin.id });
      if (!user) {
        throw new NotFoundException('Admin not found');
      }
      user.generatedOtp = otp;
      await this.adminRepository.save(user);
      return {
        success: true,
        otp,
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        error.message || 'Failed to generate otp',
      );
    }
  }

  public async otpVerification(otp: string, admin_id: number) {
    try {
      const user = await this.adminRepository.findOneBy({ id: admin_id });
      if (!user) {
        throw new NotFoundException('Admin not found');
      }
      if (user.generatedOtp !== otp) {
        throw new BadRequestException('Otp is not correct');
      }
      return true;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        error.message || 'Failed to generate otp',
      );
    }
  }
}
