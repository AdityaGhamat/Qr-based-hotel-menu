import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './provider/hotel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entity/hotel.entity';
import { Table } from './entity/table.entity';
import { CreateHotelProvider } from './provider/create-hotel.provider';
import { FindByIdProvider } from './provider/find-by-id.provider';

@Module({
  controllers: [HotelController],
  providers: [HotelService, CreateHotelProvider, FindByIdProvider],
  imports: [TypeOrmModule.forFeature([Hotel, Table])],
  exports: [HotelService],
})
export class HotelModule {}
