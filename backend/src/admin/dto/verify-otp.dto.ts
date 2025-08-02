import { IsString, MaxLength } from 'class-validator';

export class VerifyOtpDTO {
  @IsString()
  @MaxLength(100)
  otp: string;
}
