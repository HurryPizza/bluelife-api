import { Body, Controller, Put, Req, UseGuards } from '@nestjs/common';
import { UpdateNickNameDto } from './dto/user.dto';
import { FirebaseGuard } from '../auth/guard/firebase.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Put('nickname')
  @UseGuards(FirebaseGuard)
  async updateNickName(
    @Req() req,
    @Body() updateNickName: UpdateNickNameDto,
  ): Promise<any> {
    const firebaseUid = req.uid;
    await this.userService.updateUserNickName(firebaseUid, updateNickName);

    return { message: 'updated successfully' };
  }
}
