import { Injectable } from '@nestjs/common';

import { UsersService } from '@users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

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
}
