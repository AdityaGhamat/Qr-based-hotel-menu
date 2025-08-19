import { IsArray, IsEnum, IsInt, IsNumber } from 'class-validator';
import { OrderStatus } from '../entity/enum/order-types.enum';

export class CreateOrderItemDTO {
  @IsInt()
  dish: number;

  @IsInt()
  quantity: number;
}
