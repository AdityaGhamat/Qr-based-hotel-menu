import { Module, forwardRef } from '@nestjs/common';
import { AdminService } from './provider/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';
import { OtpProvider } from './provider/otp.provider';
import { AuthModule } from 'src/auth/auth.module';
import { AdminController } from './admin.controller';

@Module({
  providers: [AdminService, OtpProvider],
  imports: [TypeOrmModule.forFeature([Admin]), forwardRef(() => AuthModule)],
  exports: [OtpProvider],
  controllers: [AdminController],
})
export class AdminModule {}
