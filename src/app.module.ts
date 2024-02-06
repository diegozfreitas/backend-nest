import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamMembersModule } from './modules/team-members/team-members.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TeamMembersModule, LoginModule],
})
export class AppModule {}
