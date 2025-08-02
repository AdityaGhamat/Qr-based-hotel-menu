import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
