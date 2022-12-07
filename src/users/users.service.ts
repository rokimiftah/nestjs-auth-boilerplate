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
      name: 'test-1',
      email: 'test-1@test.com',
      password: 'test',
    },
    {
      id: 2,
      name: 'test-2',
      email: 'test-2@test.com',
      password: 'test',
    },
    {
      id: 3,
      name: 'test-3',
      email: 'test-3@test.com',
      password: 'test',
    },
  ];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => {
      return user.email === email;
    });
  }
}
