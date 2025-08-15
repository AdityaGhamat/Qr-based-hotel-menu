import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dish } from '../entity/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DishIngredient } from '../entity/dish-ingredient.entity';
import { AddIngredientsDTO } from '../dto/add-ingredients.dto';

@Injectable()
export class AddIngredientProvider {
  constructor(
    /**
     * Injecting dish repository
     */
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,

    /**
     * Injecting dish ingredient repository
     */
    @InjectRepository(DishIngredient)
    private readonly dishIngredientRepository: Repository<DishIngredient>,
  ) {}
  public async addIngredientsToDish(
    dishId: number,
    addIngredientsDto: AddIngredientsDTO,
  ) {
    const dish = await this.dishRepository.findOne({
      where: { id: dishId },
      relations: ['ingredients'],
    });

    if (!dish) {
      throw new NotFoundException('Dish not found');
    }

    let ingredient = await this.dishIngredientRepository.findOne({
      where: { name: addIngredientsDto.name },
    });

    if (!ingredient) {
      ingredient = this.dishIngredientRepository.create(addIngredientsDto);
      await this.dishIngredientRepository.save(ingredient);
    }
    const alreadyAdded = dish.ingredients.some(
      (ing) => ing.id === ingredient.id,
    );

    if (!alreadyAdded) {
      dish.ingredients.push(ingredient);
      await this.dishRepository.save(dish);
    }

    return dish;
  }
}
