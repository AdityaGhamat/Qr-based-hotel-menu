import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsEnum,
  Min,
} from 'class-validator';
import { DietType } from '../entity/enum/diet-type.enum';
export class AddIngredientsDTO {
  @IsString()
  name: string;

  @IsBoolean()
  isVegan: boolean;

  @IsBoolean()
  isVegetarian: boolean;

  @IsBoolean()
  isAllergen: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  calories?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  protein?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  carbs?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  fats?: number;

  @IsOptional()
  @IsEnum(DietType)
  dietType?: DietType;

  @IsOptional()
  @IsBoolean()
  isGlutenFree?: boolean;

  @IsOptional()
  @IsBoolean()
  isLactoseFree?: boolean;
}
