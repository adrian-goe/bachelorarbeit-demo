import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {TeamState} from '../../state/team.state';
import Team from '../../state/types/team.type';
import {Select, Store} from '@ngxs/store';
import {AddTeamAction, SelectTeamAction} from '../../state/actions/teams/team.action';


@Component({
  selector: 'tunierplanner-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent {

  @Select(TeamState.teams)
  teams$: Observable<Team[]>;

  isClosed = true;

  constructor(private store: Store) {
  }

  addTeam(team: Team) {
    this.store.dispatch(new AddTeamAction(team));
    this.isClosed = true;
  }

  openAddTeam() {
    this.isClosed = false;
  }

  closeAddTeam() {
    this.isClosed = true;
  }

  selectTeam($event: string) {
    this.store.dispatch(new SelectTeamAction($event));
  }
}
