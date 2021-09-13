import {Component} from '@angular/core';
import {GroupMatch, GroupMatchesFacade} from '@tunierplanner/tunier/domain';

@Component({
  selector: 'tunier-group-matches',
  templateUrl: './group-matches.component.html',
  styleUrls: ['./group-matches.component.scss']
})
export class GroupMatchesComponent {

  groupMatches$ = this.groupMatchesFacade.groupMatches$;

  constructor(private groupMatchesFacade: GroupMatchesFacade) {
  }

  updateMatch($event: GroupMatch) {
    this.groupMatchesFacade.updateMatch($event)
  }
}

