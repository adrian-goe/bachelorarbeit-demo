import {Injectable} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {TunierState} from "../domian/tunier.state";
import {GroupMatch} from "../types/group-match.type";
import {Observable} from "rxjs";
import {UpdateMatch} from "../domian/tunier.actions";


@Injectable({providedIn: 'root'})
export class GroupMatchesFacade {

  @Select(TunierState.getGroupMatches) groupMatches$: Observable<GroupMatch[][]>

  constructor(private readonly store: Store) {
  }

  updateMatch(groupMatch: GroupMatch) {
    this.store.dispatch(new UpdateMatch(groupMatch))
  }
}
