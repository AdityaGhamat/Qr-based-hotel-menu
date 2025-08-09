import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Admin } from 'src/admin/entity/admin.entity';

@Injectable()
export class SendWelcomeProvider {
  constructor(
    /**
     * Injecting MailserService
     */
    private readonly mailservice: MailerService,

    /**
     * Injecting ConfigService
     */
    private readonly configService: ConfigService,
  ) {}
  public async SendWelcomeEmail(admin: Admin): Promise<void> {
    await this.mailservice.sendMail({
      to: admin.email,
      from: this.configService.get('appConfig.nodemailer_mail_user'),
      subject: `Welcome to MenuQr platform`,
    });
  }
}
