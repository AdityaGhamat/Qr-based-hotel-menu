import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dish } from './dish.entity';
@Entity()
export class DishImages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: '256',
    nullable: false,
  })
  imageUrl: string;

  @ManyToOne(() => Dish, (dish) => dish.images)
  dish: Dish;
}
