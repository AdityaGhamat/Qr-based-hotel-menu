import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHotelDTO } from '../dto/create-hotel.dto';
import { Repository } from 'typeorm';
import { Hotel } from '../entity/hotel.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateHotelProvider {
  constructor(
    /**
     * Injecting Repository
     */
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}
  public async createHotel(createHotelDto: CreateHotelDTO) {
    try {
      const hotel = this.hotelRepository.create({
        name: createHotelDto.name,
        description: createHotelDto.description,
      });
      await this.hotelRepository.save(hotel);
      return hotel;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
