import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Dish } from '../entity/dish.entity';
@Injectable()
export class ValidateDishesProvider {
  constructor(
    /**
     * Injecting dish Repository
     */
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  public async validateDishes(dishIds: number[]) {
    const dishes = await this.dishRepository.findBy({
      id: In(dishIds),
    });
    const foundIds = dishes.map((dish) => dish.id);
    const invalidIds = dishIds.filter((id) => !foundIds.includes(id));
    if (invalidIds.length > 0) {
      throw new Error(`Invalid dish IDs: ${invalidIds.join(', ')}`);
    }
    return { isValid: invalidIds.length === 0, validIds: foundIds, invalidIds };
  }
}
