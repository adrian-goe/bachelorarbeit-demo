import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Team} from "@tunierplanner/teams/domain";

@Component({
  selector: 'teams-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {
  @Input() teams: Team[] = [];
  @Output() selectedTeam = new EventEmitter<string>()


  selectTeam(event: string) {
    this.selectedTeam.emit(event);
  }
}
