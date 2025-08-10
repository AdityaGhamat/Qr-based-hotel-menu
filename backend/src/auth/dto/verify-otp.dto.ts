import { IsNumber, IsString, MaxLength } from 'class-validator';

export class VerifyOtpDTO {
  @IsString()
  @MaxLength(100)
  otp: string;

  @IsString()
  @MaxLength(100)
  email: string;
}
