import { Injectable } from '@nestjs/common';
import { SendOtpDTO } from 'src/shared/dto/send-otp.dto';
import { NotificationService } from 'src/notification/provider/notification.service';
@Injectable()
export class AdminSendOtpProvider {
  constructor(
    /**
     * Injecting notificaiotn service
     */
    private readonly notificationService: NotificationService,
  ) {}

  public async sendOtp(sendOtpDto: SendOtpDTO) {
    this.notificationService.SendOtpEmail(sendOtpDto);
  }
}
