import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelService } from 'src/hotel/provider/hotel.service';
import { PaginationProvider } from 'src/shared/module/pagination/provider/pagination.provider';
import { Dish } from '../entity/dish.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDTO } from 'src/shared/module/pagination/dto/pagination-query.dto';
@Injectable()
export class GetDishesProvider {
  constructor(
    /**
     * Injecting pagination provider
     */
    private readonly paginationProvider: PaginationProvider,

    /**
     * Injecting hotel service
     */
    @Inject(forwardRef(() => HotelService))
    private readonly hotelService: HotelService,

    /**
     * Inject dish repository
     */
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  public async getDishes(
    hotel_id: number,
    paginationQuery: PaginationQueryDTO,
  ) {
    const hotel = await this.hotelService.findHotelById(hotel_id);
    return this.paginationProvider.paginateQuery(
      paginationQuery,
      this.dishRepository,
      { hotels: { id: hotel_id } },
      { hotels: true },
    );
  }
}
