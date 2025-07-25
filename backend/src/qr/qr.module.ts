import { Module } from '@nestjs/common';
import { QrController } from './qr.controller';
import { QrService } from './provider/qr.service';

@Module({
  controllers: [QrController],
  providers: [QrService],
})
export class QrModule {}
