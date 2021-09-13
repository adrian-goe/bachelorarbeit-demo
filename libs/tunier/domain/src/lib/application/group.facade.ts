import {Injectable} from '@angular/core';
import {Select} from "@ngxs/store";
import {TunierState} from "../domian/tunier.state";
import {Observable} from "rxjs";
import {Placement} from "../types/placement.type";


@Injectable({providedIn: 'root'})
export class GroupFacade {

  @Select(TunierState.groupPlacements) groupPlacements$: Observable<Placement[][]>;

}
