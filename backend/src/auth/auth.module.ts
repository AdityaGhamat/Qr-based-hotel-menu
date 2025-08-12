import { Module } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { AdminModule } from 'src/admin/admin.module';
import { forwardRef } from '@nestjs/common';
import { AuthotpProvider } from './provider/authotp.provider';
import { AuthController } from './auth.controller';
import { ResendotpProvider } from './provider/resendotp.provider';
import { NotificationModule } from 'src/notification/notification.module';
import { TokenGenerationProvider } from './provider/token-generation.provider';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
@Module({
  providers: [
    AuthService,
    AuthotpProvider,
    ResendotpProvider,
    TokenGenerationProvider,
  ],
  imports: [
    ConfigModule.forFeature(jwtConfig),
    forwardRef(() => AdminModule),
    NotificationModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
