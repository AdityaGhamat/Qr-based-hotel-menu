import { Module, forwardRef } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './provider/hotel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entity/hotel.entity';
import { Table } from './entity/table.entity';
import { CreateHotelProvider } from './provider/create-hotel.provider';
import { FindByIdProvider } from './provider/find-by-id.provider';
import { GetDishesByHotelProvider } from './provider/get-dishes-by-hotel.provider';
import { DishModule } from 'src/dish/dish.module';

@Module({
  controllers: [HotelController],
  providers: [
    HotelService,
    CreateHotelProvider,
    FindByIdProvider,
    GetDishesByHotelProvider,
  ],
  imports: [
    TypeOrmModule.forFeature([Hotel, Table]),
    forwardRef(() => DishModule),
  ],
  exports: [HotelService],
})
export class HotelModule {}
