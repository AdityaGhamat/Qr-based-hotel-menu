import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from '../entity/order-item.entity';
import { Repository } from 'typeorm';
import { CreateOrderItemDTO } from '../dto/create-order-item.dto';
import { DishService } from 'src/dish/provider/dish.service';

@Injectable()
export class CreateOrderItemProvider {
  constructor(
    /**
     * Injecting Order Repository
     */
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,

    private readonly dishService: DishService,
  ) {}

  public async createOrderItem(createOrderItemDto: CreateOrderItemDTO) {}
}
