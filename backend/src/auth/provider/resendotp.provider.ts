import { Injectable } from '@nestjs/common';
import { ResendOtpDTO } from 'src/shared/dto/resend-otp.dto';
import { AuthotpProvider } from './authotp.provider';
import { NotificationService } from 'src/notification/provider/notification.service';
@Injectable()
export class ResendotpProvider {
  constructor(
    /**
     * Injecting auth otp provider
     */
    private readonly authotpProvider: AuthotpProvider,

    /**
     * Injecting notification service
     */
    private readonly notificationService: NotificationService,
  ) {}

  public async resendOtp(resendOtpDto: ResendOtpDTO) {
    const otp = await this.authotpProvider.otpGeneration(resendOtpDto.email);
    this.notificationService.SendOtpEmail({
      otp: otp,
      email: resendOtpDto.email,
      expiry: 5,
    });
    return {
      message: 'Otp has been sent.',
    };
  }
}
