import {Injectable} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {Team} from "../types/team.type";
import {TeamState} from "../domain/team.state";


@Injectable({providedIn: 'root'})
export class TeamsListFacade {

  @Select(TeamState.allTeams)
  public teams$: Observable<Team[]>;

}
