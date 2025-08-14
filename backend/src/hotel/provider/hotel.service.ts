import { Injectable } from '@nestjs/common';
import { CreateHotelProvider } from './create-hotel.provider';
import { CreateHotelDTO } from '../dto/create-hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    /**
     * Injecting createhotel
     */
    private readonly createHotelProvider: CreateHotelProvider,
  ) {}

  public async createHotel(createHotelDto: CreateHotelDTO) {
    return this.createHotelProvider.createHotel(createHotelDto);
  }
}
