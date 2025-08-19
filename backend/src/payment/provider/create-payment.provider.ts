import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from '../entity/payment.entity';
import { QueryRunner, Repository } from 'typeorm';
import { CreatePaymentDTO } from '../dto/create-payment.dto';
import { OrderService } from 'src/order/provider/order.service';
import { statSync } from 'fs';
import { NotFoundError } from 'rxjs';
import { Order } from 'src/order/entity/order.entity';
import { PaymentMethod, PaymentStatus } from '../entity/enum/payment.enum';

@Injectable()
export class CreatePaymentProvider {
  constructor() {}

  public async createPayment(
    order: Order,
    queryRunner: QueryRunner,
    paymentMethod?: PaymentMethod,
  ): Promise<Payment> {
    const totalPrice = order.items
      .reduce(
        (sum, item) => sum + parseFloat(item.dish.price) * item.quantity,
        0,
      )
      .toFixed(2);
    const payment = queryRunner.manager.create(Payment, {
      method: paymentMethod || PaymentMethod.Cash,
      status: PaymentStatus.Pending,
      totalPrice,
      transactionId: null,
      order,
    });
    return await queryRunner.manager.save(payment);
  }
}
