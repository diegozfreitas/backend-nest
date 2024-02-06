import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamMembersService } from './team-members.service';
import { TeamMembersDto } from './team-members.dto';

@Controller('team-members')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  @Post()
  async create(@Body() data: TeamMembersDto) {
    return this.teamMembersService.create(data);
  }

  @Get()
  async getAll() {
    return this.teamMembersService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.teamMembersService.getOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: TeamMembersDto) {
    return this.teamMembersService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.teamMembersService.delete(id);
  }
}
