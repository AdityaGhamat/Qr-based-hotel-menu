import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { SendOtpDTO } from 'src/shared/dto/send-otp.dto';
@Injectable()
export class SendOtpProvider {
  constructor(
    /**
     * Injecting Config service
     */
    private readonly configService: ConfigService,

    /**
     * Injecting Mail service
     */
    private readonly mailerService: MailerService,
  ) {}

  public async sendOtp(sendOtpDto: SendOtpDTO) {
    await this.mailerService.sendMail({
      to: sendOtpDto.email,
      from: this.configService.get('appConfig.nodemailer_mail_user'),
      subject: 'Otp verification',
      template: 'otp',
      context: {
        otp: sendOtpDto.otp,
        expiry: sendOtpDto.expiry,
      },
    });
  }
}
