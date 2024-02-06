import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LoginDto } from './login.dto';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async login(data: LoginDto) {
    console.log("entrei aqui dentro login")
    const rightUserAndPassword = {
      username: 'admin@admin.com',
      password: '1q2w3e4r',
    };

    console.log("entrei aqui dentro login 1")

    if (
      data.username !== rightUserAndPassword.username ||
      data.password !== rightUserAndPassword.password
    ) {
      throw new Error('Verify your credentials');
    }

    console.log("entrei aqui dentro login 3")

    return {
      token: 'exemple',
      user: data.username,
    };
  }
}
