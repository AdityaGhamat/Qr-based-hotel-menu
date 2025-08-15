import { Injectable, NotFoundException } from '@nestjs/common';
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

  public async findHotelById(hotelId: number): Promise<Hotel | null> {
    const hotel = this.hotelRepository.findOneBy({ id: hotelId });
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    return hotel;
  }
}
