import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LoginDto } from './login.dto';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async login(data: LoginDto) {
    const rightUserAndPassword = {
      username: 'admin@admin.com',
      password: '1q2w3e4r',
    };

    if (
      data.username !== rightUserAndPassword.username ||
      data.password !== rightUserAndPassword.password
    ) {
      throw new Error('Verify your credentials');
    }

    return {
      token: 'exemple',
      user: data.username,
    };
  }
}
