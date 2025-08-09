import { registerAs } from '@nestjs/config';
export default registerAs('appConfig', () => ({
  nodemailer_mail_host: process.env.NODEMAILER_EMAIL_HOST,
  nodemailer_mail_port: process.env.NODEMAILER_EMAIL_PORT,
  nodemailer_mail_user: process.env.NODEMAILER_EMAIL_USER,
  nodemailer_mail_password: process.env.NODEMAILER_EMAIL_PASSWORD,
}));
