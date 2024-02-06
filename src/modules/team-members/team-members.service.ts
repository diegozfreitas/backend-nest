import { Injectable } from '@nestjs/common';
import { TeamMembersDto } from './team-members.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TeamMembersService {
  constructor(private prisma: PrismaService) {}

  async create(data: TeamMembersDto) {
    const userExist = await this.prisma.team_Member.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExist) {
      throw new Error('Team member already exist');
    }

    const response = await this.prisma.team_Member.create({
      data,
    });

    return response;
  }

  async getAll() {
    const response = await this.prisma.team_Member.findMany();
    return response;
  }

  async getOne(id: number) {
    const teamMemberAlreadyExist = await this.prisma.team_Member.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!teamMemberAlreadyExist) {
      throw new Error('Team member does not exist');
    }

    const response = await this.prisma.team_Member.findUnique({
      where: {
        id: Number(id),
      },
    });

    return response;
  }

  async update(id: number, data: TeamMembersDto) {
    const teamMemberAlreadyExist = await this.prisma.team_Member.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!teamMemberAlreadyExist) {
      throw new Error('Team member does not exist');
    }

    const response = await this.prisma.team_Member.update({
      data,
      where: {
        id: Number(id),
      },
    });

    return response;
  }

  async delete(id: number) {
    const teamMemberAlreadyExist = await this.prisma.team_Member.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!teamMemberAlreadyExist) {
      throw new Error('Team member does not exist');
    }

    const response = await this.prisma.team_Member.delete({
      where: {
        id: Number(id),
      },
    });

    return response;
  }
}
