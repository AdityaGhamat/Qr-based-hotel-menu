import { Module } from '@nestjs/common';
import { AdminService } from './provider/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';

@Module({
  providers: [AdminService],
  imports: [TypeOrmModule.forFeature([Admin])],
})
export class AdminModule {}
