import { Module } from '@nestjs/common';
import { PaginationModule } from './module/pagination/pagination.module';

@Module({
  imports: [PaginationModule],
  exports: [PaginationModule],
})
export class SharedModule {}
