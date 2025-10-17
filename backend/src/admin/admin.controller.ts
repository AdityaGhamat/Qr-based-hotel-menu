import { Controller, Body, Post, Get, Req } from '@nestjs/common';
import { AdminService } from './provider/admin.service';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';
import { Request } from 'express';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { AdminInfo } from 'src/auth/interface/admin-info.interface';

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
  public async createAdmin(@Body() createAdminDto: CreateAdminDTO) {
    return this.adminservice.createAdmin(createAdminDto);
  }
  @Get()
  @Auth(AuthType.Bearer)
  public async getAdmin(@ActiveUser('sub') adminId: AdminInfo['sub']) {
    return this.adminservice.getAdmin(adminId);
  }
}
