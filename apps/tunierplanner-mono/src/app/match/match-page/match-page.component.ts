import {Component} from '@angular/core';
import {MatchState} from "../../state/match.state";
import {Select, Store} from "@ngxs/store";
import {GroupMatch} from '../../state/types/tunier.type';
import {Observable} from "rxjs";
import {FilterTeamAction} from "../../state/actions/match.actions";

@Component({
  selector: 'tunierplanner-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})
export class MatchPageComponent {

  @Select(MatchState.getGroupMatches)
  matches$: Observable<GroupMatch[]>

  constructor(private readonly store: Store) {
  }

  resetFilter() {
    this.store.dispatch(new FilterTeamAction(''))
  }

  serchTerm(event: any) {
    this.store.dispatch(new FilterTeamAction(event.srcElement.value))
  }
}
