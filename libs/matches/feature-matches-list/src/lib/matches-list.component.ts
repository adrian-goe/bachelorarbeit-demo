import {Component, OnInit} from '@angular/core';
import {MatchesListFacade} from '@tunierplanner/matches/domain';

@Component({
  selector: 'matches-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent {

  matches$ = this.matchesListFacade.matches$;

  constructor(private matchesListFacade: MatchesListFacade) {
  }
}

