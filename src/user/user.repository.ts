import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from './entity/user.entity';
import { generateRandomId, getRandomString, getToday } from '../global/utils';

@Injectable()
export class UserRepository {
  async registerUser(
    transactionEntityManager: EntityManager,
    firebaseUid: string,
  ): Promise<User> {
    const user = new User();
    const user_uuid = generateRandomId(getRandomString(6), getToday());

    user.user_uuid = user_uuid;
    user.firebase_uid = firebaseUid;

    return await transactionEntityManager.save(user);
  }

  async findUserByUid(
    transactionEntityManager: EntityManager,
    firebaseUid: string,
  ): Promise<User> {
    return await transactionEntityManager.findOne(User, {
      where: { firebase_uid: firebaseUid },
    });
  }

  async updateNickName(
    transactionEntityManager: EntityManager,
    userUuid: string,
    userNickName: string,
  ): Promise<void> {
    await transactionEntityManager.update(
      User,
      { user_uuid: userUuid },
      { user_nickname: userNickName },
    );
  }
}
