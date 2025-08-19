import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from '../entity/table.entity';
import { Repository } from 'typeorm';
@Injectable()
export class GetTableProvider {
  constructor(
    /**
     * Inject table repository
     */
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  public async getTable(table_id: number, relations?: string[]) {
    return await this.tableRepository.findOne({
      where: { id: table_id },
      relations: relations,
    });
  }
}
