import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import {
  Accommodation,
  Attraction,
  Restaurant,
  Toilet,
} from './entity/tour.entity';

@Injectable()
export class TourRepository {
  async findAttractionInfo(
    transactionEntityManager: EntityManager,
    courseNumber: number,
  ): Promise<Attraction[]> {
    return await transactionEntityManager.find(Attraction, {
      where: { course_number: courseNumber },
    });
  }

  async findRestaurantInfo(
    transactionEntityManager: EntityManager,
    courseNumber: number,
  ): Promise<Restaurant[]> {
    return await transactionEntityManager.find(Restaurant, {
      where: { course_number: courseNumber },
    });
  }

  async findToiletInfo(
    transactionEntityManager: EntityManager,
    courseNumber: number,
  ): Promise<Toilet[]> {
    return await transactionEntityManager.find(Toilet, {
      where: { course_number: courseNumber },
    });
  }

  async findAccommodationInfo(
    transactionEntityManager: EntityManager,
    courseNumber: number,
  ): Promise<Accommodation[]> {
    return await transactionEntityManager.find(Accommodation, {
      where: { course_number: courseNumber },
    });
  }
}
