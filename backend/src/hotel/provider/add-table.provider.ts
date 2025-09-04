import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from '../entity/table.entity';
import { AddTableDTO } from '../dto/add-table.dto';
import { FindByIdProvider } from './find-by-id.provider';
@Injectable()
export class AddTableProvider {
  constructor(
    /**
     * Injecting table repository
     */
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,

    /**
     * Injecting get hotel by id
     */
    private readonly findHotelByIdProvider: FindByIdProvider,
  ) {}
  public async addTable(addTableDTO: AddTableDTO, hotelId?: number) {
    const hotel = await this.findHotelByIdProvider.findHotelById(hotelId);
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }

    let table = this.tableRepository.create({ hotel });

    table = await this.tableRepository.save(table);

    table.tableUrl = `${hotelId}/table/${table.id}`;

    return await this.tableRepository.save(table);
  }
}
