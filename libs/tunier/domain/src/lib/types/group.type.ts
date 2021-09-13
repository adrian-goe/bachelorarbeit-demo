import {TunierTeam} from "./team.type";
import {GroupMatch} from "./group-match.type";
import {Placement} from "./placement.type";

export interface Group {
  id: string;
  teams: TunierTeam[];
  groupMatches: GroupMatch[];
  placement: Placement[];
}
