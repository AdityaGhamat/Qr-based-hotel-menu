import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DietType } from './enum/diet-type.enum';
@Entity()
export class DishIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isVegan: boolean;

  @Column({
    type: 'boolean',
    default: false,
  })
  isVegetarian: boolean;

  @Column({
    type: 'boolean',
    default: false,
  })
  isAllergen: boolean;

  @Column({
    type: 'float',
    nullable: true,
  })
  calories: number;

  @Column({
    type: 'float',
    nullable: true,
  })
  protein: number;

  @Column({
    type: 'float',
    nullable: true,
  })
  carbs: number;

  @Column({
    type: 'float',
    nullable: true,
  })
  fats: number;

  @Column({
    type: 'enum',
    enum: DietType,
    nullable: true,
  })
  dietType: DietType;

  @Column({
    type: 'boolean',
    nullable: true,
  })
  isGlutenFree: boolean;

  @Column({
    type: 'boolean',
    nullable: true,
  })
  isLactoseFree: boolean;
}
