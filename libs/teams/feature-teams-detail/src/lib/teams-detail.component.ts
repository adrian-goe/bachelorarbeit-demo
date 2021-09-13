import {Component} from '@angular/core';
import {TeamsDetailFacade, Team} from '@tunierplanner/teams/domain';
import {Location} from "@angular/common";

@Component({
  selector: 'teams-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss']
})
export class TeamsDetailComponent {
  team: Team;


  constructor(
    private readonly teamsDetailFacade: TeamsDetailFacade,
    private readonly location: Location) {
    this.teamsDetailFacade.team$.subscribe(team => this.team = team)
  }

  back() {
    this.location.back();
  }

}

