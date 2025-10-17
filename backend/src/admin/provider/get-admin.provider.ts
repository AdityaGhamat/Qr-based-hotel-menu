import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entity/admin.entity';
import { AdminInfo } from 'src/auth/interface/admin-info.interface';
@Injectable()
export class GetAdminProvider {
  constructor(
    //Injecting Admin Repository
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}
  public async getAdmin(adminId: AdminInfo['sub']) {
    const adminInfo = await this.adminRepository.findOneBy({ id: adminId });
    if (!adminInfo) {
      throw new NotFoundException('Admin not found');
    }
    return adminInfo;
  }
}
