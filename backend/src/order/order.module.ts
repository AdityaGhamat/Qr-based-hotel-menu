import { Module, forwardRef } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './provider/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrderItem } from './entity/order-item.entity';
import { CreateOrderItemProvider } from './provider/create-order-item.provider';
import { DishModule } from 'src/dish/dish.module';
import { GetOrderByIdProvider } from './provider/get-order-by-id.provider';
import { CreateOrderProvider } from './provider/create-order.provider';
import { PaymentModule } from 'src/payment/payment.module';
import { HotelModule } from 'src/hotel/hotel.module';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    CreateOrderItemProvider,
    GetOrderByIdProvider,
    CreateOrderProvider,
  ],
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem]),
    DishModule,
    HotelModule,
    forwardRef(() => PaymentModule),
  ],
  exports: [OrderService],
})
export class OrderModule {}
