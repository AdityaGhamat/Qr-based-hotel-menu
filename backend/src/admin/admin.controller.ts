import { Controller, Body, Post } from '@nestjs/common';
import { AdminService } from './provider/admin.service';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';

@Controller('admin')
export class AdminController {
  constructor(
    /**
     * Injecting admin service
     */
    private readonly adminservice: AdminService,
  ) {}

  @Post('create-admin')
  @Auth(AuthType.None)
  public async createAdminDto(@Body() createAdminDto: CreateAdminDTO) {
    return this.adminservice.createAdmin(createAdminDto);
  }
}
