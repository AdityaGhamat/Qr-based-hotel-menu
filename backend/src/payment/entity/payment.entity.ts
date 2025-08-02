import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinTable,
} from 'typeorm';
import { PaymentMethod, PaymentStatus } from './enum/payment.enum';
import { Order } from 'src/order/entity/order.entity';
@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    default: PaymentMethod.Cash,
  })
  method: PaymentMethod;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.Pending,
  })
  status: PaymentStatus;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  totalPrice: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  transactionId: string;

  @OneToOne(() => Order, (order) => order.payment, { onDelete: 'CASCADE' })
  @JoinTable()
  order: Order;
}
