import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {TunierService} from "./tunier.service";
import {Match} from "@prisma/client";

@Controller('tunier')
export class TunierController {
  constructor(private readonly tunierService: TunierService) {
  }

  @Get('')
  getTeams() {
    console.log('request tunier')
    return this.tunierService.getTunier();
  }

  @Get('placement/:groupId')
  getGroupPlacement(@Param('groupId') groupId: string) {
    return this.tunierService.getGroupPlacement(groupId)
  }

  @Post('match')
  updateMatch(@Body() match: Match) {
    return this.tunierService.updateMatch(match)
  }
}
