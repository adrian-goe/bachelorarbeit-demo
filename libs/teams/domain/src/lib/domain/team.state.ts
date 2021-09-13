import {Injectable, NgZone} from '@angular/core';
import {Action, NgxsOnInit, Selector, State, StateContext} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import {AddTeamAction, LoadTeamsAction, SelectTeamAction} from "./team.actions";
import {AddTeamService} from "../infrastructure/add-team.service";
import {LoadTeamsService} from "../infrastructure/load-teams.service";
import {Team} from '../types/team.type';
import {TeamNameMessageBusService} from "@tunierplanner/shared/utils";


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
  static allTeams({teams}: TeamStateModle): Team[] {
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
    private readonly zone: NgZone,
    private route: ActivatedRoute,
    private readonly teamNameMessageBusService: TeamNameMessageBusService,
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
      this.router.navigate([team.id], {relativeTo: this.route.parent})
        .then(() => this.teamNameMessageBusService.teamName.next(getState().seletedTeam.name))
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
