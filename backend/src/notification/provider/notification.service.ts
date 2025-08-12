import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/entity/admin.entity';
import { SendWelcomeProvider } from './send-welcome.provider';
import { SendOtpProvider } from './send-otp.provider';
import { SendOtpDTO } from 'src/shared/dto/send-otp.dto';
@Injectable()
export class NotificationService {
  constructor(
    /**
     * Injecting Send_Weolcome_Email Provider
     */
    private readonly sendWelcomeEmailProvider: SendWelcomeProvider,
    /**
     * Injecting Send Otp Provider
     */
    private readonly sendOtpEmailProvider: SendOtpProvider,
  ) {}
  public SendWelcomeEmail(admin: Admin) {
    return this.sendWelcomeEmailProvider.SendWelcomeEmail(admin);
  }
  public SendOtpEmail(sendOtpDto: SendOtpDTO) {
    return this.sendOtpEmailProvider.sendOtp(sendOtpDto);
  }
}
