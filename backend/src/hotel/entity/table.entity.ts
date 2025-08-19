import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Hotel } from './hotel.entity';
import { Order } from 'src/order/entity/order.entity';

@Entity('restaurant-table')
export class Table {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  tableUrl: string;

  @ManyToOne(() => Hotel, (hotel) => hotel.tables)
  hotel: Hotel;

  @OneToMany(() => Order, (order) => order.table)
  order: Order[];
}
