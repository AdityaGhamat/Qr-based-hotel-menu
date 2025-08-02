import { Module } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { OtpProvider } from './provider/otp.provider';
@Module({
  providers: [AuthService, OtpProvider],
})
export class AuthModule {}
