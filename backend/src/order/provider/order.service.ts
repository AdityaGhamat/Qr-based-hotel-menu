import { Injectable } from '@nestjs/common';
import { GetOrderByIdProvider } from './get-order-by-id.provider';
import { CreateOrderProvider } from './create-order.provider';
import { CreateOrderDTO } from '../dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    /**
     * Injecting get order by id
     */
    private readonly getOrderByIdProvider: GetOrderByIdProvider,

    /**
     * Injecting create order provider
     */
    private readonly createOrderProvider: CreateOrderProvider,
  ) {}

  public async getOrderById(order_id: number) {
    return this.getOrderByIdProvider.getOrderById(order_id);
  }
  public async createOrder(createOrderDto: CreateOrderDTO) {
    return this.createOrderProvider.createOrder(createOrderDto);
  }
}
