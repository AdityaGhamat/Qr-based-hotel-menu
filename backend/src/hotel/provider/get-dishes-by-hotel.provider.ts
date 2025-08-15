import { Injectable, forwardRef } from '@nestjs/common';
import { DishService } from 'src/dish/provider/dish.service';
import { PaginationQueryDTO } from 'src/shared/module/pagination/dto/pagination-query.dto';
@Injectable()
export class GetDishesByHotelProvider {
  constructor(
    /**
     * Injecting dish service
     */

    private readonly dishService: DishService,
  ) {}
  public async getDishesByHotelId(
    hotel_id: number,
    paginationQuery: PaginationQueryDTO,
  ) {
    return this.dishService.getDishesByHotel(hotel_id, paginationQuery);
  }
}
