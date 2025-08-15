import { Body, Controller, Patch, Post, Param } from '@nestjs/common';
import { DishService } from './provider/dish.service';
import { CreateDishDTO } from './dto/create-dish.dto';
import { AddIngredientsDTO } from './dto/add-ingredients.dto';

@Controller('dish')
export class DishController {
  constructor(
    /**
     * Injecting dish service
     */
    private readonly dishService: DishService,
  ) {}
  @Post('create-dish/:hotelId')
  public async createDish(
    @Param('hotelId') admin_id: number,
    @Body() createDishDto: CreateDishDTO,
  ) {
    return this.dishService.createDish(admin_id, createDishDto);
  }

  @Patch('add-ingredients/:dishId')
  public async addIngredients(
    @Param('dishId') dishId: number,
    @Body() addIngredientsDto: AddIngredientsDTO,
  ) {
    return this.dishService.addIngredients(addIngredientsDto, dishId);
  }
}
