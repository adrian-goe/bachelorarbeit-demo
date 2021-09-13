import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GroupMatch} from "@tunierplanner/matches/domain";

@Component({
  selector: 'tunierplanner-matches-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  @Input() match: GroupMatch;

  @Output() updateMatch = new EventEmitter<GroupMatch>();

  updateScore(team: number, event: any) {
    const updatedMatch = {...this.match};
    const value = Number(event?.srcElement?.value);
    if (team === 0) {
      updatedMatch.teamOneGoals = value ? value : updatedMatch.teamOneGoals;
    }
    if (team === 1) {
      updatedMatch.teamTwoGoals = value ? value : updatedMatch.teamTwoGoals;
    }
    this.updateMatch.emit(updatedMatch);
  }
}
