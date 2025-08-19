import { IsEnum, IsOptional, IsString, IsInt, IsNumber } from 'class-validator';
import { PaymentMethod, PaymentStatus } from '../entity/enum/payment.enum';

export class CreatePaymentDTO {
  @IsEnum(PaymentMethod)
  method: PaymentMethod;

  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @IsString()
  totalPrice: string;

  @IsOptional()
  @IsString()
  transactionId?: string;

  @IsNumber()
  orderId: number;
}
