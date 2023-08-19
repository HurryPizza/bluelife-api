import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('attraction-tb')
export class Attraction {
  @PrimaryColumn()
  id: number;

  @Column()
  place_name: string;

  @Column()
  course_number: number;

  @Column()
  image: string;

  @Column()
  section: number;

  @Column({ type: 'double' })
  latitude: number;

  @Column({ type: 'double' })
  longitude: number;
}

@Entity('restaurant-tb')
export class Restaurant {
  @PrimaryColumn()
  id: number;

  @Column()
  restaurant_name: string;

  @Column()
  course_number: number;

  @Column()
  image: string;

  @Column()
  section: number;

  @Column({ type: 'double' })
  latitude: number;

  @Column({ type: 'double' })
  longitude: number;
}

@Entity('accommodation-tb')
export class Accommodation {
  @PrimaryColumn()
  id: number;

  @Column()
  accommodation_name: string;

  @Column()
  course_number: number;

  @Column()
  section: number;

  @Column({ type: 'double' })
  latitude: number;

  @Column({ type: 'double' })
  longitude: number;
}

@Entity('toilet-tb')
export class Toilet {
  @PrimaryColumn()
  id: number;

  @Column()
  toilet_name: string;

  @Column()
  course_number: number;

  @Column()
  section: number;

  @Column({ type: 'double' })
  latitude: number;

  @Column({ type: 'double' })
  longitude: number;
}
