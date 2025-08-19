import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './provider/order.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(
    /**
     * Injecting order service
     */
    private readonly orderService: OrderService,
  ) {}
  @Post('create')
  public async createOrder(@Body() createOrderDto: CreateOrderDTO) {
    return this.orderService.createOrder(createOrderDto);
  }
}
