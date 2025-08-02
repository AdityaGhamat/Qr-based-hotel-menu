import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './provider/dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entity/dish.entity';
import { DishImages } from './entity/dish-image.entity';
import { DishIngredient } from './entity/dish-ingredient.entity';

@Module({
  controllers: [DishController],
  providers: [DishService],
  imports: [TypeOrmModule.forFeature([Dish, DishImages, DishIngredient])],
})
export class DishModule {}
