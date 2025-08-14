import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';
export class CreateHotelDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  dishes?: [];

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tables?: [];

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  admins?: [];
}
