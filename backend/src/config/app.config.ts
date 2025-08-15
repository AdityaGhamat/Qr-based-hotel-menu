import { registerAs } from '@nestjs/config';
export default registerAs('appConfig', () => ({
  //nodemailer
  nodemailer_mail_host: process.env.NODEMAILER_EMAIL_HOST,
  nodemailer_mail_port: process.env.NODEMAILER_EMAIL_PORT,
  nodemailer_mail_user: process.env.NODEMAILER_EMAIL_USER,
  nodemailer_mail_password: process.env.NODEMAILER_EMAIL_PASSWORD,

  //aws
  aws_bucket_name: process.env.AWS_PUBLIC_BUCKET_NAME,
  aws_region: process.env.AWS_REGION,
  aws_cloudfront_url: process.env.AWS_CLOUDFRONT_URL,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_key_id: process.env.AWS_SECRET_ACCESS_KEY,
}));
