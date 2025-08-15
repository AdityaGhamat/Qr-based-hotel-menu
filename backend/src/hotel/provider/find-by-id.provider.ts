import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from '../entity/hotel.entity';
import { Repository, In } from 'typeorm';

@Injectable()
export class FindByIdProvider {
  constructor(
    /**
     * Injecting Hotel repository
     */
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}
  public async findHotelByIds(hotelIds: number[]): Promise<Hotel[]> {
    return this.hotelRepository.findBy({ id: In(hotelIds) });
  }
}
