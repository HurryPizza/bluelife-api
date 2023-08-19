import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private dataSource: DataSource,
    private readonly userRepository: UserRepository,
  ) {}
  async registerUser(firebaseUid: string): Promise<User> {
    return await this.dataSource.transaction(
      async (entity_manager: EntityManager) => {
        const user = await this.userRepository.findUserByUid(
          entity_manager,
          firebaseUid,
        );

        if (!user) {
          return await this.userRepository.registerUser(
            entity_manager,
            firebaseUid,
          );
        }

        return user;
      },
    );
  }
}
