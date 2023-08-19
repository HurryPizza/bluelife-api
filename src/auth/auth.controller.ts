import { Controller, Post, Query, Req, UseGuards } from '@nestjs/common';
import { FirebaseGuard } from './guard/firebase.guard';
import { AuthService } from './auth.service';
import { User } from '../user/entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @UseGuards(FirebaseGuard)
  async login(@Req() req): Promise<User> {
    const firebaseUid = req.uid;
    return await this.authService.registerUser(firebaseUid);
  }
}
