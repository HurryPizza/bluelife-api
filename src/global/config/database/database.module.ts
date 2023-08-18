import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MariaDBConfigService } from './database.service';

@Module({
  imports: [ConfigModule],
  providers: [MariaDBConfigService],
})
export class MariaDBConfigModule {}
