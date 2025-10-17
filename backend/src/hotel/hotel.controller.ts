import {
  Body,
  Controller,
  Post,
  Param,
  Get,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { HotelService } from './provider/hotel.service';
import { CreateHotelDTO } from './dto/create-hotel.dto';
import { AddTableDTO } from './dto/add-table.dto';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';

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

  @Get('dishes/:hotel_id')
  @Auth(AuthType.None)
  public async getDishesByHotelId(
    @Param('hotel_id') hotel_id: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.hotelService.getDishesByHotelId(hotel_id, {
      page: page,
      limit: limit,
    });
  }

  //Table routes starts from here
  @Post('create-table/:hotel_id')
  public async createTable(
    @Body() addTableDto: AddTableDTO,
    @Param('hotel_id', ParseIntPipe) hotelId: number,
  ) {
    return this.hotelService.addTable(addTableDto, hotelId);
  }

  @Post('create-multiple-tables')
  public async addMultipleTables(
    @Query('hotel_id', ParseIntPipe) hotelId: number,
    @Query('tables', ParseIntPipe) no_of_tables: number,
  ) {
    return this.hotelService.addMultipleTables(no_of_tables, hotelId);
  }
}
