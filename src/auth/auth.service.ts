import { Injectable } from '@nestjs/common';
import { AuthPayloadDTO } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { find } from 'rxjs';

const fakeUser = [
  {
    id: 1,
    username: 'Anshul',
    password: 'ans123',
  },
  {
    id: 2,
    username: 'John',
    password: 'john123',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  validateUser({ username, password }: AuthPayloadDTO) {
    const findUser = fakeUser.find((user) => user.username === username);
    if (!findUser) return null;
    if (findUser.password === password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
