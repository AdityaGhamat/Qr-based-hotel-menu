import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entity/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDTO } from '../dto/create-order.dto';
import { HotelService } from 'src/hotel/provider/hotel.service';
import { CreateOrderItemProvider } from './create-order-item.provider';
import { PaymentService } from 'src/payment/provider/payment.service';

@Injectable()
export class CreateOrderProvider {
  constructor(
    /**
     * Injecting order repository
     */
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    /**
     * Inject getTable provider
     */
    private readonly hotelSerivce: HotelService,

    /**
     * Insert createOrderItem provider
     */
    private readonly createOrderItemProvider: CreateOrderItemProvider,

    /**
     * Insert payment service
     */
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {}
  public async createOrder(createOrderDto: CreateOrderDTO) {
    const { table_id, items, paymentMethod } = createOrderDto;
    const queryRunner =
      this.orderRepository.manager.connection.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction();
    try {
      const table = await this.hotelSerivce.getTable(table_id, [
        'hotel',
        'hotel-dishes',
      ]);
      const order = queryRunner.manager.create(Order, { table });

      order.items = await Promise.all(
        items.map((item) =>
          this.createOrderItemProvider.createOrderItem(
            item,
            order,
            table,
            queryRunner,
          ),
        ),
      );
      const savedOrder = await queryRunner.manager.save(Order, order);
      const payment = await this.paymentService.createPayment(
        savedOrder,
        queryRunner,
        paymentMethod,
      );
      savedOrder.payment = payment;
      await queryRunner.manager.save(Order, savedOrder);
      await queryRunner.commitTransaction();
      return savedOrder;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(error);
    } finally {
      await queryRunner.release();
    }
  }
}
