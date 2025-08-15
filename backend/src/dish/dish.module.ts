import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './provider/dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entity/dish.entity';
import { DishImages } from './entity/dish-image.entity';
import { DishIngredient } from './entity/dish-ingredient.entity';
import { CreateDishProvider } from './provider/create-dish.provider';
import { AddIngredientProvider } from './provider/add-ingredient.provider';
import { HotelModule } from 'src/hotel/hotel.module';

@Module({
  controllers: [DishController],
  providers: [DishService, CreateDishProvider, AddIngredientProvider],
  imports: [
    TypeOrmModule.forFeature([Dish, DishImages, DishIngredient]),
    HotelModule,
  ],
})
export class DishModule {}
