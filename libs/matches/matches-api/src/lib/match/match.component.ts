import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GroupMatch} from "@tunierplanner/matches/domain";

@Component({
  selector: 'tunierplanner-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {

  @Input() match: GroupMatch;

  @Output() updateMatch = new EventEmitter<GroupMatch>();

  _updateMatch($event: GroupMatch) {
    this.updateMatch.emit($event)
  }
}
