import { Injectable } from '@nestjs/common';
import { CreateHotelProvider } from './create-hotel.provider';
import { CreateHotelDTO } from '../dto/create-hotel.dto';
import { FindByIdProvider } from './find-by-id.provider';
import { GetDishesByHotelProvider } from './get-dishes-by-hotel.provider';
import { PaginationQueryDTO } from 'src/shared/module/pagination/dto/pagination-query.dto';
import { GetTableProvider } from './get-table.provider';
import { GetOrderByTableIdProvider } from './get-order-by-table-id.provider';
import { AddTableProvider } from './add-table.provider';
import { AddTableDTO } from '../dto/add-table.dto';
import { AddMultipleTablesProvider } from './add-multiple-tables.provider';

@Injectable()
export class HotelService {
  constructor(
    /**
     * Injecting createhotel
     */
    private readonly createHotelProvider: CreateHotelProvider,

    /**
     * Injecting findbyids
     */
    private readonly findByIdProvider: FindByIdProvider,

    /**
     * Injecting getdishesprovider
     */
    private readonly getDishesByHotelIdProvider: GetDishesByHotelProvider,

    /**
     * Injecting getTable provider
     */
    private readonly getTableProvider: GetTableProvider,

    /**
     * Injecting getOrdersByTable
     * Id Provider
     */
    private readonly getOrderByTableIdProvider: GetOrderByTableIdProvider,

    /**
     * Injecting AddTable Provider
     */
    private readonly addTableProvider: AddTableProvider,

    /**
     * Injecting addMultiple tables
     */
    private readonly addMultipleTablesProvider: AddMultipleTablesProvider,
  ) {}

  public async createHotel(createHotelDto: CreateHotelDTO) {
    return this.createHotelProvider.createHotel(createHotelDto);
  }
  public async findHotelsByIds(hotelIds: number[]) {
    return this.findByIdProvider.findHotelByIds(hotelIds);
  }
  public async findHotelById(hotelId: number) {
    return this.findByIdProvider.findHotelById(hotelId);
  }
  public async getDishesByHotelId(
    hotelId: number,
    paginationQuery: PaginationQueryDTO,
  ) {
    return this.getDishesByHotelIdProvider.getDishesByHotelId(
      hotelId,
      paginationQuery,
    );
  }
  public async getTable(table_id: number, relations?: string[]) {
    return this.getTableProvider.getTable(table_id, relations);
  }
  public async getOrderByTableId(table_id: number) {
    return this.getOrderByTableIdProvider.getOrdersByTableId(table_id);
  }
  public async addTable(addTableDto: AddTableDTO, hotelId: number) {
    return this.addTableProvider.addTable(addTableDto, hotelId);
  }
  public async addMultipleTables(no_of_tables: number, hotelId: number) {
    return this.addMultipleTablesProvider.addMultipleTablesInHotels(
      no_of_tables,
      hotelId,
    );
  }
}
