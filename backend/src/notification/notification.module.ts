import { Module } from '@nestjs/common';
import { NotificationService } from './provider/notification.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { SendWelcomeProvider } from './provider/send-welcome.provider';
import { SendOtpProvider } from './provider/send-otp.provider';

@Module({
  providers: [NotificationService, SendWelcomeProvider, SendOtpProvider],
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('appConfig.nodemailer_mail_host'),
          secure: false,
          port: config.get('appConfig.nodemailer_mail_port'),
          auth: {
            user: config.get('appConfig.nodemailer_mail_user'),
            pass: config.get('appConfig.nodemailer_mail_password'),
          },
        },
        default: {
          from: `Menu <no-replay@nestjs-blog.com>`,
        },
        template: {
          dir: join(__dirname, 'template'),
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
    }),
  ],
  exports: [NotificationService],
})
export class NotificationModule {}
