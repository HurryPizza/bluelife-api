import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as firebase from 'firebase-admin';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'firebase') {
  async validate(token: string) {
    try {
      const firebaseUser = await firebase.auth().verifyIdToken(token);
      return firebaseUser;
    } catch (error) {
      throw new UnauthorizedException('Firebase token invalid');
    }
  }
}
