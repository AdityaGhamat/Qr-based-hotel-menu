import {
  IsString,
  IsDate,
  IsNotEmpty,
  IsEmail,
  MaxLength,
} from 'class-validator';

export class CreateAdminDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(256)
  email: string;
}
