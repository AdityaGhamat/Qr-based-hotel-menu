import { Injectable } from '@nestjs/common';
import { CreateHotelProvider } from './create-hotel.provider';
import { CreateHotelDTO } from '../dto/create-hotel.dto';
import { FindByIdProvider } from './find-by-id.provider';
import { GetDishesByHotelProvider } from './get-dishes-by-hotel.provider';
import { PaginationQueryDTO } from 'src/shared/module/pagination/dto/pagination-query.dto';

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
}
