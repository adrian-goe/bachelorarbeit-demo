import {Component, Input} from '@angular/core';
import {Team} from "@tunierplanner/teams/domain";

@Component({
  selector: 'teams-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {

  @Input() team: Team;
}
