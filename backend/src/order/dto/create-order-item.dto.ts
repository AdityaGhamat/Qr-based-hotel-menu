import { IsArray, IsEnum, IsInt, IsNumber } from 'class-validator';
import { OrderStatus } from '../entity/enum/order-types.enum';

export class CreateOrderItemDTO {
  @IsArray()
  @IsInt({ each: true })
  dish: number[];

  @IsInt()
  order: number;

  @IsInt()
  quantity: number;

  @IsEnum(OrderStatus)
  orderStatus: OrderStatus;
}
