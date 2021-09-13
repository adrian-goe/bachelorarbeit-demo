import {Action, NgxsOnInit, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {patch} from "@ngxs/store/operators";
import {GroupMatch} from "../types/group-match.type";
import {LoadMatchesService} from "../infrastructure/load-matches.service";
import {FilterTeamAction, LoadMatchesAction} from "./match.actions";

export interface MatchStateType {
  matches: GroupMatch[];
  searchTerm: string;
}

const DEFALUTSTATE: MatchStateType = {
  matches: [],
  searchTerm: ''
}

// @dynamic
@State<MatchStateType>({
  name: 'matches',
  defaults: DEFALUTSTATE
})
@Injectable({
  providedIn: 'root'
})
export class MatchState implements NgxsOnInit {

  @Selector([MatchState])
  static getMatches(state: MatchStateType): GroupMatch[] {
    return state.matches.filter(value => {
      return value.teamOne.name.toLowerCase() === state.searchTerm.toLowerCase() || value.teamTwo.name.toLowerCase() === state.searchTerm.toLowerCase() || state.searchTerm === '';
    })
  }

  constructor(private readonly loadMatchService: LoadMatchesService) {
    console.log('state constructore')
  }

  @Action(LoadMatchesAction)
  async loadTunier(ctx: StateContext<MatchStateType>) {
    await this.loadMatchService.loadMatches().subscribe((data) => {
      ctx.setState(patch({matches: data}));
    });
  }


  @Action(FilterTeamAction)
  async search(ctx: StateContext<MatchStateType>, {payload}: FilterTeamAction) {
    ctx.setState(patch({searchTerm: payload.toLowerCase()}));
  }

  ngxsOnInit(ctx?: StateContext<any>): any {
    ctx.dispatch(new LoadMatchesAction())
  }
}
