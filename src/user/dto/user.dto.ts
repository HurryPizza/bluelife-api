import { IsString } from 'class-validator';

export class UpdateNickNameDto {
  @IsString()
  user_nickname: string;
}
