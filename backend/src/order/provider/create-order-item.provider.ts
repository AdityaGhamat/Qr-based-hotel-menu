import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from '../entity/order-item.entity';
import { QueryRunner, Repository } from 'typeorm';
import { CreateOrderItemDTO } from '../dto/create-order-item.dto';
import { Order } from '../entity/order.entity';
import { Table } from 'src/hotel/entity/table.entity';
import { Dish } from 'src/dish/entity/dish.entity';
import { OrderStatus } from '../entity/enum/order-types.enum';
@Injectable()
export class CreateOrderItemProvider {
  constructor() {}

  public async createOrderItem(
    createOrderItemDto: CreateOrderItemDTO,
    order: Order,
    table: Table,
    queryRunner: QueryRunner,
  ) {
    const { dish: dishId, quantity } = createOrderItemDto;

    const dish = await queryRunner.manager.findOne(Dish, {
      where: { id: dishId },
      relations: ['hotels'],
    });

    if (!dish) {
      throw new NotFoundException('Dish not found');
    }
    if (!dish.available) {
      throw new BadRequestException(`${dish.name} is not available right now`);
    }
    if (!dish.hotels.some((hotel) => hotel.id != table.hotel.id)) {
      throw new BadRequestException(
        `${dish.name} is not avialable in this hotel`,
      );
    }
    if (quantity < 1) {
      throw new BadRequestException('quantity should be atleast 1');
    }
    return queryRunner.manager.create(OrderItem, {
      dish,
      quantity,
      orderStatus: OrderStatus.OrderReceived,
      order,
    });
  }
}
