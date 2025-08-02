import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './provider/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrderItem } from './entity/order-item.entity';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [TypeOrmModule.forFeature([Order, OrderItem])],
})
export class OrderModule {}
