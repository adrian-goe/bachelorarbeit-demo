import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {TeamState} from "../../state/team.state";
import {Observable} from "rxjs";
import Team from "../../state/types/team.type";
import {TunierState} from "../../state/tunier.state";
import {Group, GroupMatch, Placement} from "../../state/types/tunier.type";
import {UpdateMatch} from "../../state/actions/tunier/tunier.action";

@Component({
  selector: 'tunierplanner-tunierpage',
  templateUrl: './tunierpage.component.html',
  styleUrls: ['./tunierpage.component.css']
})
export class TunierpageComponent {


  @Select(TeamState.teams)
  teams$: Observable<Team[]>;

  @Select(TunierState.groups)
  groups$: Observable<Group[]>;

  @Select(TunierState.groupPlacements)
  groupPlaces$: Observable<Placement[][]>;

  @Select(TunierState.getGroupMatches)
  groupMatches$: Observable<GroupMatch[][]>;


  constructor(private readonly store: Store) {
  }


  click() {
    console.log('click');
  }

  updateMatch($event: GroupMatch) {
    this.store.dispatch(new UpdateMatch($event))
  }
}
