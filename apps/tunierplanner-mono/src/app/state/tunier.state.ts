import {Action, NgxsOnInit, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {LoadTunierService} from "./services/load-tunier.service";
import {LoadTunierAction, UpdateMatch} from "./actions/tunier/tunier.action";
import {patch} from "@ngxs/store/operators";
import {Group, GroupMatch, Placement, TunierType} from "./types/tunier.type";
import {UpdateMatchService} from "./services/update-match.service";

const DEFALUTSTATE: TunierType = {
  groups: []
}

@State<TunierType>({
  name: 'tunier',
  defaults: DEFALUTSTATE
})
@Injectable({
  providedIn: 'root'
})
export class TunierState implements NgxsOnInit {

  @Selector([TunierState])
  static groups(state: TunierType): Group[] {
    return state.groups
  }

  @Selector([TunierState])
  static groupPlacements(state: TunierType): Placement[][] {
    return state.groups.map(group => group.placement)
  }

  @Selector([TunierState])
  static getGroupMatches(state: TunierType): GroupMatch[][] {
    return state.groups.map(group => group.groupMatches)
  }

  constructor(private readonly loadTunierService: LoadTunierService,
              private readonly updateMatchService: UpdateMatchService) {
  }

  @Action(LoadTunierAction)
  async loadTunier(ctx: StateContext<TunierType>) {
    await this.loadTunierService.loadTunier().subscribe((data: TunierType) => {
      ctx.setState(patch(data));
    });
  }


  @Action(UpdateMatch)
  async updateMatch(ctx: StateContext<TunierType>, {payload}: UpdateMatch) {
    this.updateMatchService.updateMatch(payload)
      .subscribe(() => ctx.dispatch(new LoadTunierAction()))
  }

  ngxsOnInit(ctx?: StateContext<any>): any {
    ctx.dispatch(new LoadTunierAction())
  }
}
