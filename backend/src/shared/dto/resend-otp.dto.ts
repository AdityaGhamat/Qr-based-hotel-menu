import { IsString, Length, MaxLength } from 'class-validator';
export class ResendOtpDTO {
  @IsString()
  @MaxLength(256)
  email: string;
}
