import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entity/order.entity';
import { Repository } from 'typeorm';
@Injectable()
export class GetOrderByIdProvider {
  constructor(
    /**
     * Injecting order repository
     */
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}
  public async getOrderById(order_id: number): Promise<Order | null> {
    const order = await this.orderRepository.findOneBy({ id: order_id });
    return order;
  }
}
