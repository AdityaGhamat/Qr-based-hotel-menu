import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Admin } from '../entity/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VerifyOtpDTO } from 'src/shared/dto/verify-otp.dto';

@Injectable()
export class OtpProvider {
  constructor(
    /**
     * Injecting admin repository
     */
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}
  public generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  public async otpGeneration(email: string) {
    try {
      const otp = this.generateOtp();
      const otpExpirationMinutes = 5;
      const user = await this.adminRepository.findOne({
        where: { email: email },
      });
      if (!user) {
        throw new NotFoundException('Admin not found');
      }
      user.generatedOtp = otp;
      user.otpExpiredAt = new Date(
        Date.now() + otpExpirationMinutes * 60 * 1000,
      );
      await this.adminRepository.save(user);
      return otp;
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

  public async otpVerification(verifyOtpDto: VerifyOtpDTO) {
    try {
      const user = await this.adminRepository.findOne({
        where: { email: verifyOtpDto.email },
      });
      if (!user) {
        throw new NotFoundException('Admin not found');
      }
      if (!user.generatedOtp) {
        throw new BadRequestException('No active OTP found');
      }
      if (user.generatedOtp !== verifyOtpDto.otp) {
        throw new BadRequestException('Otp is not correct');
      }
      if (!user.otpExpiredAt || user.otpExpiredAt.getTime() < Date.now()) {
        throw new BadRequestException('Time limit exceeded');
      }

      user.isVerified = true;
      user.generatedOtp = null;
      user.otpExpiredAt = null;
      await this.adminRepository.save(user);
      return user;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        error.message || 'Failed to verify otp',
      );
    }
  }
}
