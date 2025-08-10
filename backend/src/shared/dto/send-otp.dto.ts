import { IsNumber, IsString } from 'class-validator';
export class SendOtpDTO {
  @IsString()
  email: string;

  @IsString()
  otp: string;

  @IsNumber()
  expiry: number;
}
