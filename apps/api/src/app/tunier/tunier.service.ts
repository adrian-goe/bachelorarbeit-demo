import {Injectable} from "@nestjs/common";
import {TeamsService} from "../teams/teams.service";
import {TunierType} from "./tunier.type";
import {PrismaService} from "../prisma/prisma.service";
import {Group, Match, Team} from "@prisma/client";

@Injectable()
export class TunierService {

  private tunier: TunierType = {
    groups: [{group: [], groupMatches: []}, {group: [], groupMatches: []}]
  }

  constructor(private readonly teamservice: TeamsService,
              private readonly prisma: PrismaService
  ) {
    this.createGroups();
    // this.createTunier()
  }

  private createGroups() {
    let id = 0;
    this.teamservice.getTeams().forEach((team, index) => {
      const group = this.tunier.groups[index % 2];
      group.group.forEach(gTeam => {
        group.groupMatches.push({
          id: id++,
          hasPlayed: false,
          teamOne: gTeam.team,
          teamTwo: team,
          teamOneScore: 0,
          teamTwoScore: 0
        });
      })
      group.group.push({team, points: 0, goals: 0});

    })
  }

  getGroupPlacement(id: string) {
    return this.prisma.group.findFirst({
      include: {
        teams: true,
        groupMatches: true
      },
      where: {
        id
      }
    })
      .then(group => {
        const result: { team: Team, points: number, shootGoals: number, gotGoals: number }[] = []
        const teams = group.teams;
        const matches = group.groupMatches;
        for (let i = 0; i < teams.length; i++) {
          result.push({team: teams[i], points: 0, shootGoals: 0, gotGoals: 0})
          for (let j = 0; j < matches.length; j++) {
            let teamSide = 2;
            if (teams[i].id === matches[j].teamOneId) {
              teamSide = 0
            }
            if (teams[i].id === matches[j].teamTwoId) {
              teamSide = 1
            }
            if (teamSide !== 2 && matches[j].hasPlayed) {
              if (matches[j].teamOneGoals > matches[j].teamTwoGoals && teamSide === 0) {
                result[i].points += 3;
                result[i].shootGoals += matches[j].teamOneGoals;
                result[i].gotGoals += matches[j].teamTwoGoals;
              } else if (matches[j].teamOneGoals > matches[j].teamTwoGoals && teamSide === 1) {
                result[i].shootGoals += matches[j].teamTwoGoals;
                result[i].gotGoals += matches[j].teamOneGoals;
              } else if (matches[j].teamOneGoals < matches[j].teamTwoGoals && teamSide === 1) {
                result[i].points += 3;
                result[i].shootGoals += matches[j].teamTwoGoals;
                result[i].gotGoals += matches[j].teamOneGoals;
              } else if (matches[j].teamOneGoals < matches[j].teamTwoGoals && teamSide === 0) {
                result[i].shootGoals += matches[j].teamOneGoals;
                result[i].gotGoals += matches[j].teamTwoGoals;
              } else if (matches[j].teamOneGoals === matches[j].teamTwoGoals) {
                result[i].points += 1;
                result[i].shootGoals += matches[j].teamOneGoals;
                result[i].gotGoals += matches[j].teamTwoGoals;
              }
            }
          }
        }

        return result.sort((a, b) => {

          let res = b.points - a.points;
          if (res === 0) {
            res = b.shootGoals - a.shootGoals;
          }
          if (res === 0) {
            res = b.gotGoals - a.gotGoals;
          }
          return res
        })

      })
  }


  private async createTunier() {
    await this.prisma.team.findMany()
      .then((teams: Team[]) => {
          const groupedTeams = [[], []]
          teams.forEach((team, index) => {
            groupedTeams[index % groupedTeams.length].push(team)
          })
          return groupedTeams
        }
      )
      .then((groups: Team[][]) => {

        const matches: Match[][] = groups.map((group) => {

          const groupMatches: Match[] = [];
          for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
              groupMatches.push({
                teamOneId: group[i].id,
                teamTwoId: group[j].id,
                teamOneGoals: 0,
                teamTwoGoals: 0,
                hasPlayed: false,
                id: undefined,
                groupId: undefined,
                quaterFinalsId: undefined,
                halfFinalsId: undefined
              })
            }
          }
          return groupMatches;
        })
        return {matches, groups};
      })
      .then(async value => {

        const groupIds: string[] = []
        for (let i = 0; i < value.groups.length; i++) {
          await this.prisma.group.create({

            data: {
              teams: {
                connect:
                  value.groups[i].map(t => {
                    return {id: t.id}
                  }),
              },
              groupMatches: {
                createMany: {
                  skipDuplicates: true,
                  data: value.matches[i]
                }
              }

            }
          }).then((group: Group) => groupIds.push(group.id))
        }
        return groupIds
      })
      .then(groups => {
        this.prisma.tunier.create({
          data: {
            groups: {
              connect: groups.map(id => {
                return {id}
              })
            },
            quaterFinals: {
              create: {}
            },
            halfFinals: {
              create: {}
            },
            final: undefined,

          }
        })
      })
  }

  public getTunier() {
    return this.prisma.tunier.findFirst({
      where: {id: 'C9074D7F-8847-4B17-B36B-13010EE29C90'},
      select: {
        groups: {
          select: {
            id: true,
            teams: true,
            groupMatches: {
              orderBy: [
                {
                  id: 'desc',
                }
              ],
              select: {
                id: true,
                teamOne: true,
                teamTwo: true,
                teamOneGoals: true,
                teamTwoGoals: true,
                hasPlayed: true,
              }
            }
          }
        }
      }
    })
      .then(tunier => {
        const data = tunier.groups.map(group => {
          return this.getGroupPlacement(group.id).then(async groupPlacement => {
            await Promise.all(groupPlacement)
            return {...group, placement: groupPlacement}
          });
        })
        return Promise.all(data).then(r => r)
      })
      .then(result => {
        return {groups: result}
      })
  }

  updateMatch(match: Match) {
    return this.prisma.match.update({
      data: {
        hasPlayed: true,
        teamOneGoals: match.teamOneGoals,
        teamTwoGoals: match.teamTwoGoals,
      },
      where: {id: match.id}
    })
  }
}
