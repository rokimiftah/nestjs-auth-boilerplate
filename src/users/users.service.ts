import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'test',
      email: 'test@test.com',
      password: 'test',
    },
  ];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => {
      return user.email === email;
    });
  }
}
