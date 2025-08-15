import { Body, Controller, Post, Param } from '@nestjs/common';
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
  @Post('new-hotel/:admin_id')
  public async createHotel(
    @Body() createHotelDto: CreateHotelDTO,
    @Param('admin_id') admin_id: number,
  ) {
    if (!createHotelDto.admins) {
      createHotelDto.admins = [];
    }
    createHotelDto.admins.push(admin_id);
    return this.hotelService.createHotel(createHotelDto);
  }
}
