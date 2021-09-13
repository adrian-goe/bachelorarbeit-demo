import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Team} from "@tunierplanner/teams/domain";

@Component({
  selector: 'teams-team-list-entry',
  templateUrl: './team-list-entry.component.html',
  styleUrls: ['./team-list-entry.component.css']
})
export class TeamListEntryComponent {

  @Input() team: Team;

  @Output() selectedTeam = new EventEmitter<string>();

  selectTeam(team: Team) {
    this.selectedTeam.emit(team.id)
  }
}
