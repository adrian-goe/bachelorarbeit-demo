import {Module} from '@nestjs/common';
import {TeamsController} from "./teams/teams.controller";
import {TeamsService} from "./teams/teams.service";
import {TunierController} from "./tunier/tunier.controller";
import {TunierService} from "./tunier/tunier.service";
import {PrismaModule} from "./prisma/prisma.module";
import {MatchController} from "./matches/match.controller";
import {MatchService} from './matches/match.service';

@Module({
  imports: [PrismaModule],
  controllers: [TeamsController, TunierController, MatchController],
  providers: [TeamsService, TunierService, MatchService],
})
export class AppModule {
}
