import { Injectable } from '@nestjs/common';
import { CreatePaymentProvider } from './create-payment.provider';
import { CreatePaymentDTO } from '../dto/create-payment.dto';
import { QueryRunner } from 'typeorm';
import { Order } from 'src/order/entity/order.entity';
import { PaymentMethod } from '../entity/enum/payment.enum';

@Injectable()
export class PaymentService {
  constructor(
    /**
     * Injecting create payment provider
     */
    private readonly createPaymentProvider: CreatePaymentProvider,
  ) {}
  public async createPayment(
    order: Order,
    queryRunner: QueryRunner,
    paymentMethod?: PaymentMethod,
  ) {
    return await this.createPaymentProvider.createPayment(
      order,
      queryRunner,
      paymentMethod,
    );
  }
}
