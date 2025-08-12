import { Hotel } from 'src/hotel/entity/hotel.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 256,
  })
  name: string;

  @Index()
  @Column({
    type: 'varchar',
    length: 256,
    unique: true,
  })
  email: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isVerified: boolean;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  generatedOtp: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  otpExpiredAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToMany(() => Hotel, (hotel) => hotel.admins)
  hotels: Hotel[];
}
