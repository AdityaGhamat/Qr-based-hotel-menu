import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { DishModule } from './dish/dish.module';
import { QrModule } from './qr/qr.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payment/payment.module';
import { NotificationModule } from './notification/notification.module';
import { SharedModule } from './shared/shared.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import envValidation from './config/validation/env.validation';

const Env = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !Env ? '.env' : `.env.${Env}`,
      load: [appConfig, databaseConfig],
      validationSchema: envValidation,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: configService.get<boolean>(
          'database.autoLoadEntities',
        ),
        synchronize: configService.get<boolean>('database.synchronize'),
        url: configService.get<string>('database.db_url'),
        logging: true,
      }),
    }),
    HotelModule,
    DishModule,
    QrModule,
    OrderModule,
    AdminModule,
    AuthModule,
    PaymentModule,
    NotificationModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
