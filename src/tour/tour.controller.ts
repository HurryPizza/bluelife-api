import { Controller, Get, Query } from '@nestjs/common';
import { TourService } from './tour.service';
import {
  Accommodation,
  Attraction,
  Restaurant,
  Toilet,
} from './entity/tour.entity';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get('attraction')
  async findAttractionInfo(
    @Query('course_number') course_number: number,
  ): Promise<Attraction[]> {
    return await this.tourService.findAttractionInfo(course_number);
  }

  @Get('restaurant')
  async findRestaurantInfo(
    @Query('course_number') course_number: number,
  ): Promise<Restaurant[]> {
    return await this.tourService.findRestaurantInfo(course_number);
  }

  @Get('accommodation')
  async findAccommodationInfo(
    @Query('course_number') course_number: number,
  ): Promise<Accommodation[]> {
    return await this.tourService.findAccommodationInfo(course_number);
  }

  @Get('toilet')
  async findToiletInfo(
    @Query('course_number') course_number: number,
  ): Promise<Toilet[]> {
    return await this.tourService.findToiletInfo(course_number);
  }
}
