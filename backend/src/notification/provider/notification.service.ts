import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/entity/admin.entity';
import { SendWelcomeProvider } from './send-welcome.provider';
@Injectable()
export class NotificationService {
  constructor(
    /**
     * Injecting Send_Weolcome_Email Provider
     */
    private readonly sendWelcomeEmailProvider: SendWelcomeProvider,
  ) {}
  public async SendWelcomeEmail(admin: Admin) {
    return await this.sendWelcomeEmailProvider.SendWelcomeEmail(admin);
  }
}
