import {
  IsArray,
  IsInt,
  ValidateNested,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { CreateOrderItemDTO } from './create-order-item.dto';
import { Type } from 'class-transformer';
import { PaymentMethod } from 'src/payment/entity/enum/payment.enum';

export class CreateOrderDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDTO)
  items: CreateOrderItemDTO[];

  @IsInt()
  table_id: number;

  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}
