import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './provider/order.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';

@Controller('order')
export class OrderController {
  constructor(
    /**
     * Injecting order service
     */
    private readonly orderService: OrderService,
  ) {}
  @Post('create')
  @Auth(AuthType.None)
  public async createOrder(@Body() createOrderDto: CreateOrderDTO) {
    return this.orderService.createOrder(createOrderDto);
  }
}
