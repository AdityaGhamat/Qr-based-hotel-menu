import { Dish } from 'src/dish/entity/dish.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Table } from './table.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: false,
  })
  description: string;

  @ManyToMany(() => Dish, (dish) => dish.hotels)
  @JoinTable()
  dishes: Dish[];

  @OneToMany(() => Table, (table) => table.hotel)
  tables: Table[];
}
