import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';

@Entity('restaurant-table')
export class Table {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  tableUrl: string;

  @ManyToOne(() => Hotel, (hotel) => hotel.tables)
  hotel: Hotel;
}
