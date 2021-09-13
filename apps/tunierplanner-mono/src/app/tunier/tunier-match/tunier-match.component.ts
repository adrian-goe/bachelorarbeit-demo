import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GroupMatch} from "../../state/types/tunier.type";

@Component({
  selector: 'tunierplanner-tunier-match',
  templateUrl: './tunier-match.component.html',
  styleUrls: ['./tunier-match.component.css']
})
export class TunierMatchComponent {
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
