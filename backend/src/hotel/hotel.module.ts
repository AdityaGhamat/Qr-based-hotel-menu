import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './provider/hotel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entity/hotel.entity';
import { Table } from './entity/table.entity';
import { CreateHotelProvider } from './provider/create-hotel.provider';

@Module({
  controllers: [HotelController],
  providers: [HotelService, CreateHotelProvider],
  imports: [TypeOrmModule.forFeature([Hotel, Table])],
})
export class HotelModule {}
