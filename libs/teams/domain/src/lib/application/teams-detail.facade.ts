import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from "@ngxs/store";
import {TeamState} from "../domain/team.state";
import {Team} from "../types/team.type";


@Injectable({providedIn: 'root'})
export class TeamsDetailFacade {

  @Select(TeamState.selectedTeam)
  public team$: Observable<Team>;
}
