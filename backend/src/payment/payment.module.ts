import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entity/payment.entity';
import { PaymentService } from './provider/payment.service';
import { CreatePaymentProvider } from './provider/create-payment.provider';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payment]), forwardRef(() => OrderModule)],
  providers: [PaymentService, CreatePaymentProvider],
  exports: [PaymentService],
})
export class PaymentModule {}
