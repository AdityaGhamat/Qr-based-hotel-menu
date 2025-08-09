import { Module } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { AdminModule } from 'src/admin/admin.module';
import { forwardRef } from '@nestjs/common';
import { AuthotpProvider } from './provider/authotp.provider';
import { AuthController } from './auth.controller';
@Module({
  providers: [AuthService, AuthotpProvider],
  imports: [forwardRef(() => AdminModule)],
  controllers: [AuthController],
})
export class AuthModule {}
