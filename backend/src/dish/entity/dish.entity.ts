import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  Index,
} from 'typeorm';
import { DishImages } from './dish-image.entity';
import { Hotel } from 'src/hotel/entity/hotel.entity';
import { DishIngredient } from './dish-ingredient.entity';
@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    type: 'varchar',
    length: 256,
  })
  name: string;

  @ManyToMany(() => DishIngredient, { cascade: true })
  @JoinTable()
  ingredients: DishIngredient[];

  @Column({
    type: 'varchar',
    length: 256,
  })
  price: string;

  @OneToMany(() => DishImages, (dishImage) => dishImage.dish)
  images: DishImages[];

  @ManyToMany(() => Hotel, (hotel) => hotel.dishes)
  hotels: Hotel[];
}
