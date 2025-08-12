import { Controller, Body, Post } from '@nestjs/common';
import { AdminService } from './provider/admin.service';
import { CreateAdminDTO } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    /**
     * Injecting admin service
     */
    private readonly adminservice: AdminService,
  ) {}
  @Post('create-admin')
  public async createAdminDto(@Body() createAdminDto: CreateAdminDTO) {
    return this.adminservice.createAdmin(createAdminDto);
  }
}
