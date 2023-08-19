import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourRepository } from './tour.repository';
import { TourController } from './tour.controller';

@Module({
  controllers: [TourController],
  providers: [TourService, TourRepository],
})
export class TourModule {}
