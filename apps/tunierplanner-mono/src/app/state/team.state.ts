import {Injectable, NgZone} from '@angular/core';
import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import Team from './types/team.type';
import {AddTeamService} from './services/add-team.service';
import {LoadTeamsService} from './services/load-teams.service';
import {Router} from '@angular/router';
import {LoadTeamsAction, SelectTeamAction, AddTeamAction} from './actions/teams/team.action';

interface TeamStateModle {
  teams: Team[],
  seletedTeam?: Team
}

const DEFALUTSTATE: TeamStateModle = {
  teams: []
}

// @dynamic
@State<TeamStateModle>({
  name: 'teams',
  defaults: DEFALUTSTATE
})
@Injectable({
  providedIn: 'root'
})
export class TeamState implements NgxsOnInit {
  @Selector([TeamState])
  static teams({teams}: TeamStateModle): Team[] {
    return teams;
  }

  @Selector([TeamState])
  static selectedTeam({seletedTeam}: TeamStateModle): Team {
    return seletedTeam;
  }

  @Selector([TeamState])
  static getGroups({teams}: TeamStateModle): Team[][] {
    const groups: Team[][] = [[], []]
    teams.forEach((value, index) => {
      groups[index % 2].push(value)
    })
    return groups;
  }

  constructor(
    private readonly addTeamService: AddTeamService,
    private readonly loadTeamsService: LoadTeamsService,
    private readonly router: Router,
    private readonly zone: NgZone
  ) {
  }

  @Action(AddTeamAction)
  addTeam({getState, patchState}: StateContext<TeamStateModle>, {payload}: AddTeamAction) {
    this.addTeamService.addTeam(payload)
    patchState({teams: Array.from(new Set([...getState().teams, payload]))});
  }

  @Action(SelectTeamAction)
  selectTeam({getState, patchState}: StateContext<TeamStateModle>, {payload}: SelectTeamAction) {
    const team = getState().teams.find(team => team.id === payload)
    patchState({seletedTeam: team});
    this.zone.run(() => {

      this.router.navigate(['teams', team.id])
    });
  }

  @Action(LoadTeamsAction)
  async loadTeams({patchState}: StateContext<TeamStateModle>) {
    await this.loadTeamsService.loadTeams().subscribe((data: Team[]) => {
      patchState({teams: data});
    });
  }

  ngxsOnInit(ctx?: StateContext<any>): any {
    ctx.dispatch(new LoadTeamsAction)
  }
}
