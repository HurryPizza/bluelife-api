import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { TourRepository } from './tour.repository';
import {
  Accommodation,
  Attraction,
  Restaurant,
  Toilet,
} from './entity/tour.entity';

@Injectable()
export class TourService {
  constructor(
    private dataSource: DataSource,
    private readonly tourRepository: TourRepository,
  ) {}

  async findAttractionInfo(courseNumber: number): Promise<Attraction[]> {
    return await this.dataSource.transaction(
      async (entity_manager: EntityManager) => {
        return await this.tourRepository.findAttractionInfo(
          entity_manager,
          courseNumber,
        );
      },
    );
  }

  async findToiletInfo(courseNumber: number): Promise<Toilet[]> {
    return await this.dataSource.transaction(
      async (entity_manager: EntityManager) => {
        return await this.tourRepository.findToiletInfo(
          entity_manager,
          courseNumber,
        );
      },
    );
  }

  async findRestaurantInfo(courseNumber: number): Promise<Restaurant[]> {
    return await this.dataSource.transaction(
      async (entity_manager: EntityManager) => {
        return await this.tourRepository.findRestaurantInfo(
          entity_manager,
          courseNumber,
        );
      },
    );
  }

  async findAccommodationInfo(courseNumber: number): Promise<Accommodation[]> {
    return await this.dataSource.transaction(
      async (entity_manager: EntityManager) => {
        return await this.tourRepository.findAccommodationInfo(
          entity_manager,
          courseNumber,
        );
      },
    );
  }
}
