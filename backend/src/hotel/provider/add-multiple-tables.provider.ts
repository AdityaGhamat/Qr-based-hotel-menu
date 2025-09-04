import { BadRequestException, Injectable } from '@nestjs/common';
import { AddTableProvider } from './add-table.provider';

@Injectable()
export class AddMultipleTablesProvider {
  constructor(
    /**
     * Injecting add table provider
     */
    private readonly addTableProvider: AddTableProvider,
  ) {}
  public async addMultipleTablesInHotels(
    no_of_tables: number,
    hotelId: number,
  ) {
    if (no_of_tables > 100) {
      throw new BadRequestException(
        'No of tables cannot be added more than 100 one time',
      );
    }
    const tables: Promise<any>[] = [];
    for (let i = 0; i < no_of_tables; i++) {
      tables.push(this.addTableProvider.addTable({}, hotelId));
    }
    console.log(tables);
    return await Promise.all(tables);
  }
}
