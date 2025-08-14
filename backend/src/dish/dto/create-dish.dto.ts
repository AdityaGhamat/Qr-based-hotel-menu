import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateDishDTO {
  @IsString()
  @MaxLength(256)
  name: string;

  @IsArray()
  @IsOptional()
  ingredients?: [];

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsArray()
  @IsOptional()
  images?: [];

  @IsArray()
  @IsOptional()
  hotels?: [];

  @IsNumber()
  @IsNotEmpty()
  admin_id: number;
}
