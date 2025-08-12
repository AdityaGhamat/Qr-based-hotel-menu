import { IsNumber, IsString, Length, MaxLength } from 'class-validator';

export class VerifyOtpDTO {
  @IsString()
  @Length(6, 6)
  otp: string;

  @IsString()
  @MaxLength(100)
  email: string;
}
