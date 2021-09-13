import {Component, OnInit} from '@angular/core';
import {MatchesFilterFacade} from '@tunierplanner/matches/domain';

@Component({
  selector: 'matches-matches-filter',
  templateUrl: './matches-filter.component.html',
  styleUrls: ['./matches-filter.component.scss']
})
export class MatchesFilterComponent implements OnInit {
  constructor(private matchesFilterFacade: MatchesFilterFacade) {
  }

  resetFilter() {
    this.matchesFilterFacade.filterByTeamName('')
  }

  filterByTeamName(event: any) {
    this.matchesFilterFacade.filterByTeamName(event.srcElement.value)
  }

  ngOnInit(): void {
    this.resetFilter();
  }
}

