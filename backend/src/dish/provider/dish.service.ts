import { Injectable } from '@nestjs/common';
import { CreateDishProvider } from './create-dish.provider';
import { AddIngredientProvider } from './add-ingredient.provider';
import { CreateDishDTO } from '../dto/create-dish.dto';
import { AddIngredientsDTO } from '../dto/add-ingredients.dto';
import { GetDishesProvider } from './get-dishes.provider';
import { PaginationQueryDTO } from 'src/shared/module/pagination/dto/pagination-query.dto';

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

    /**
     * Injecting getdishes provider
     */
    private readonly getDishesProvider: GetDishesProvider,
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

  public async getDishesByHotel(
    hotel_id: number,
    paginationQuery: PaginationQueryDTO,
  ) {
    return this.getDishesProvider.getDishes(hotel_id, paginationQuery);
  }

  public async getDishById(dish_id: number) {
    return this.getDishesProvider.getDishById(dish_id);
  }
}
