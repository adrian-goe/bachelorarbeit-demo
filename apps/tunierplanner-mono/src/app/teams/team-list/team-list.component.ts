import {Component, EventEmitter, Input, Output} from '@angular/core';
import Team from '../../state/types/team.type';


@Component({
  selector: 'tunierplanner-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {

  @Input() teams: Team[] = [];

  @Output() selectedTeam = new EventEmitter<string>();

  getFirstChar(name: string): string {
    return name.substring(0, 1)
  }

  selectTeam(team: Team) {
    this.selectedTeam.emit(team.id)
  }
}
