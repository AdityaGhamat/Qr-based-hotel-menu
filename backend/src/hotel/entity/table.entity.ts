import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Hotel } from './hotel.entity';
import { Order } from 'src/order/entity/order.entity';

@Entity('restaurantTable')
export class Table {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  tableUrl: string;

  @ManyToOne(() => Hotel, (hotel) => hotel.tables, { onDelete: 'CASCADE' })
  hotel: Hotel;

  @OneToMany(() => Order, (order) => order.table)
  order: Order[];
}
