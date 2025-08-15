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
  dishes?: number[];

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tables?: number[];

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  admins?: number[];
}
