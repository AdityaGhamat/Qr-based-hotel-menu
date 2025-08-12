import { IsNumber, IsString, MaxLength } from 'class-validator';
export class SendOtpDTO {
  @IsString()
  @MaxLength(256)
  email: string;

  @IsString()
  otp: string;

  @IsNumber()
  @MaxLength(256)
  expiry: number;
}
