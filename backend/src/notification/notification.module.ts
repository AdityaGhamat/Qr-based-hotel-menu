import { Module } from '@nestjs/common';
import { NotificationService } from './provider/notification.service';

@Module({
  providers: [NotificationService],
})
export class NotificationModule {}
