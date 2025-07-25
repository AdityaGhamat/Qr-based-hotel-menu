import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './provider/dish.service';

@Module({
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
