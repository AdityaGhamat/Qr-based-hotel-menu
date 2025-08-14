import { Injectable } from '@nestjs/common';
import { Dish } from '../entity/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDishDTO } from '../dto/create-dish.dto';
@Injectable()
export class CreateDishProvider {
  constructor(
    /**
     * Injecting Repository
     */
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  public async createDish(createDishDto: CreateDishDTO) {
    const dish = await this.dishRepository.create({
      name: createDishDto.name,
      price: createDishDto.price,
    });
  }
}
