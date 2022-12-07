import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '@users/users.service';

import { IPayload } from './context/types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{ id: number; name: string; email: string }> {
    const user = await this.userService.findByEmail(email);

    if (user && user.password === password) {
      const { ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(user): Promise<{ accessToken: string }> {
    const payload: IPayload = {
      sub: user.sub,
      email: user.email,
      name: user.name,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
