import {Controller, Get} from "@nestjs/common";
import {MatchService} from "./match.service";

@Controller('matches')
export class MatchController {
  constructor(private readonly matchservice: MatchService) {
  }

  @Get('')
  getTeams() {
    return this.matchservice.getMatches()
  }
}
