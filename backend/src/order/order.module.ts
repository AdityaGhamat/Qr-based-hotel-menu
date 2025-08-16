import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './provider/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrderItem } from './entity/order-item.entity';
import { CreateOrderItemProvider } from './provider/create-order-item.provider';
import { DishModule } from 'src/dish/dish.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService, CreateOrderItemProvider],
  imports: [TypeOrmModule.forFeature([Order, OrderItem]), DishModule],
})
export class OrderModule {}
