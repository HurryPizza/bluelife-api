import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MariaDBConfigModule } from './global/config/database/database.module';
import { MariaDBConfigService } from './global/config/database/database.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TourModule } from './tour/tour.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [MariaDBConfigModule],
      useClass: MariaDBConfigService,
      inject: [MariaDBConfigService],
    }),
    UserModule,
    AuthModule,
    TourModule,
  ],
})
export class AppModule {}
