import { Controller, Param, Patch, Post } from '@nestjs/common';
import { AdminService } from './provider/admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    /**
     * Injecting admin service
     */
    private readonly adminservice: AdminService,
  ) {}
  @Post('send-otp')
  public async sendOtp(@Param() admin_id: string) {}
}
