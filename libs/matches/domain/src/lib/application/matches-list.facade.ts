import {Injectable} from '@angular/core';
import {MatchState} from "../domain/match.state";
import {Select, Store} from "@ngxs/store";
import {GroupMatch} from "../types/group-match.type";
import {Observable} from "rxjs";
import {TeamNameMessageBusService} from "@tunierplanner/shared/utils";
import {FilterTeamAction} from "../domain/match.actions";

@Injectable({providedIn: 'root'})
export class MatchesListFacade {
  @Select(MatchState.getMatches) matches$: Observable<GroupMatch[]>

  constructor(
    private readonly store: Store,
    private readonly teamNameMessageBusService: TeamNameMessageBusService,
  ) {
    this.teamNameMessageBusService.teamName.subscribe(value => {
      this.filterByTeamName(value)
    })
    this.teamNameMessageBusService.resendMessage();
  }

  public filterByTeamName(teamName: string) {
    this.store.dispatch(new FilterTeamAction(teamName))
  }
}
