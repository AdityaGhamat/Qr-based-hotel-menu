import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from '../entity/table.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetOrderByTableIdProvider {
  constructor(
    /**
     * Injecting table repository
     */
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}
  public async getOrdersByTableId(table_id: number) {
    const table = await this.tableRepository.findOne({
      where: {
        id: table_id,
      },
      relations: ['order', 'order.items', 'order.items.dish', 'order.payment'],
    });
    if (!table) {
      throw new NotFoundException('table not found');
    }
    return table.order;
  }
}
