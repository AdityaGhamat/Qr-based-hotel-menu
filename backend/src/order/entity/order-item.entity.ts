import { Dish } from 'src/dish/entity/dish.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OrderStatus } from './enum/order-types.enum';
import { Order } from './order.entity';
@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Dish)
  dish: Dish;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @Column({
    type: 'int',
    default: 1,
    nullable: false,
  })
  quantity: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.OrderReceived,
  })
  orderStatus: OrderStatus;
}
