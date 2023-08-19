import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { DataSource, EntityManager } from 'typeorm';
import { UpdateNickNameDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private dataSource: DataSource,
  ) {}

  async updateUserNickName(
    firebaseUid: string,
    updateNickName: UpdateNickNameDto,
  ): Promise<void> {
    await this.dataSource.transaction(async (entity_manager: EntityManager) => {
      const userInfo = await this.userRepository.findUserByUid(
        entity_manager,
        firebaseUid,
      );

      await this.userRepository.updateNickName(
        entity_manager,
        userInfo.user_uuid,
        updateNickName.user_nickname,
      );
    });
  }
}
