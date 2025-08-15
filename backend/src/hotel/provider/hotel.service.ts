import { Injectable } from '@nestjs/common';
import { CreateHotelProvider } from './create-hotel.provider';
import { CreateHotelDTO } from '../dto/create-hotel.dto';
import { FindByIdProvider } from './find-by-id.provider';

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
  ) {}

  public async createHotel(createHotelDto: CreateHotelDTO) {
    return this.createHotelProvider.createHotel(createHotelDto);
  }
  public async findHotelsByIds(hotelIds: number[]) {
    return this.findByIdProvider.findHotelByIds(hotelIds);
  }
}
