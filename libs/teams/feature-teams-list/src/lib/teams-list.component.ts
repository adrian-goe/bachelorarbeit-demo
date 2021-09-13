import {Component, Input} from '@angular/core';
import {SelectTeamAction, Team, TeamsListFacade} from '@tunierplanner/teams/domain';
import {Store} from "@ngxs/store";


@Component({
  selector: 'teams-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent {
  teams$ = this.teamService.teams$;
  isClosed = true;
  @Input() teams: Team[] = [];

  constructor(
    private readonly store: Store,
    private readonly teamService: TeamsListFacade
  ) {
  }

  selectTeam($event: string) {
    this.store.dispatch(new SelectTeamAction($event));
  }

  openAddTeam() {
    this.isClosed = false;
  }

  closeAddTeam() {
    this.isClosed = true;
  }

  createTeam($event: Team) {
    console.log($event)
  }
}

