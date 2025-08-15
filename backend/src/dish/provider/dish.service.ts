import { Injectable } from '@nestjs/common';
import { CreateDishProvider } from './create-dish.provider';
import { AddIngredientProvider } from './add-ingredient.provider';
import { CreateDishDTO } from '../dto/create-dish.dto';
import { AddIngredientsDTO } from '../dto/add-ingredients.dto';

@Injectable()
export class DishService {
  constructor(
    /**
     * Injecting createDish provider
     */
    private readonly createDishProvider: CreateDishProvider,

    /**
     * Injecting add ingredients provider
     */
    private readonly addIngredientsProvider: AddIngredientProvider,
  ) {}

  public async createDish(hotel_id: number, createDishDto: CreateDishDTO) {
    return this.createDishProvider.createDish(hotel_id, createDishDto);
  }

  public async addIngredients(
    addIngredientsDto: AddIngredientsDTO,
    dishId: number,
  ) {
    return this.addIngredientsProvider.addIngredientsToDish(
      dishId,
      addIngredientsDto,
    );
  }
}
