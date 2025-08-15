import { Injectable } from '@nestjs/common';
import { Dish } from '../entity/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateDishDTO } from '../dto/create-dish.dto';
import { HotelService } from 'src/hotel/provider/hotel.service';
@Injectable()
export class CreateDishProvider {
  constructor(
    /**
     * Injecting Repository
     */
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,

    /**
     * Injecting hotel service
     */
    private readonly hotelService: HotelService,
  ) {}

  public async createDish(hotel_id: number, createDishDto: CreateDishDTO) {
    const hotelIds = Array.from(
      new Set([...(createDishDto.hotels || []), hotel_id]),
    );

    const hotels = await this.hotelService.findHotelsByIds(hotelIds);

    const dish = this.dishRepository.create({
      name: createDishDto.name,
      price: createDishDto.price,
      hotels,
    });

    await this.dishRepository.save(dish);

    return dish;
  }
}
