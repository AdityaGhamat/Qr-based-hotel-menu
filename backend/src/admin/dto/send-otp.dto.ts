import { IsString, Length, MaxLength } from 'class-validator';

export class SendOtpDTO {
  @IsString()
  @MaxLength(256)
  email: string;

  @Length(6, 6)
  otp: string;
}
