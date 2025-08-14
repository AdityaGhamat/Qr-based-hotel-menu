import { Body, Controller, Post } from '@nestjs/common';
import { HotelService } from './provider/hotel.service';
import { CreateHotelDTO } from './dto/create-hotel.dto';

@Controller('hotel')
export class HotelController {
  constructor(
    /**
     * Injecting hotel service
     */
    private readonly hotelService: HotelService,
  ) {}
  @Post('new-hotel')
  public async createHotel(@Body() createHotelDto: CreateHotelDTO) {
    return this.hotelService.createHotel(createHotelDto);
  }
}
