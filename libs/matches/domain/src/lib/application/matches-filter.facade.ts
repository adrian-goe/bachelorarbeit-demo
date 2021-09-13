import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {FilterTeamAction} from "../domain/match.actions";
import {TeamNameMessageBusService} from "@tunierplanner/shared/utils";

@Injectable({
  providedIn: 'root'
})
export class MatchesFilterFacade {

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
