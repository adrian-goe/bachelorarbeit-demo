import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TeamsService} from "./teams.service";
import Team from "./team.type";

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {
  }

  @Get()
  getTeams() {
    return this.teamService.getTeams();
  }

  @Get(':id')
  getTeamById(@Param('id') id: string) {
    return this.teamService.getTeamById(id);
  }

  @Post()
  addTeam(@Body() team: Team) {
    this.teamService.addTeam(team)
  }
}
