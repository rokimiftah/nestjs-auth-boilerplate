import { Injectable, Request } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(@Request() req): { message: string; user: unknown } {
    return {
      message: `Protected, but user '${req.user.name}' has access!`,
      user: req.user,
    };
  }
}
