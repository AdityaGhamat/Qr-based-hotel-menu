import { Module, forwardRef } from '@nestjs/common';
import { AdminService } from './provider/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';
import { OtpProvider } from './provider/otp.provider';
import { AuthModule } from 'src/auth/auth.module';
import { AdminController } from './admin.controller';
import { AdminSendOtpProvider } from './provider/send-otp.provider';
import { CreateAdminProvider } from './provider/create-admin.provider';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  providers: [
    AdminService,
    OtpProvider,
    AdminSendOtpProvider,
    CreateAdminProvider,
  ],
  imports: [
    TypeOrmModule.forFeature([Admin]),
    forwardRef(() => AuthModule),
    NotificationModule,
  ],
  exports: [OtpProvider],
  controllers: [AdminController],
})
export class AdminModule {}
