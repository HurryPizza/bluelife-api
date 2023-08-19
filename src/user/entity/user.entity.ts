import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user-tb')
export class User {
  @PrimaryColumn()
  user_uuid: string;

  @Column({ nullable: true })
  user_nickname: string;

  @Column()
  firebase_uid: string;

  @Column({ default: '산호초' })
  level: string;
}
