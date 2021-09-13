import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class MatchService {

  constructor(private readonly prisma: PrismaService) {
  }

  getMatches() {
    return this.prisma.match.findMany({
      include: {
        teamOne: true,
        teamTwo: true,
      }
    })
  }
}
