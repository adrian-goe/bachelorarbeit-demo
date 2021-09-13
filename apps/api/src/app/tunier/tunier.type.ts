import Team from "../teams/team.type";
import {MatchType} from "../matches/match.type";

export interface TunierType {
  groups: Group[];
  quaterFinals?: ArrayOfMaxLength4<MatchType>;
  halfFinals?: ArrayOfMaxLength2<MatchType>;
  final?: MatchType;
}

interface Group {
  group: ArrayOfMaxLength4<GroupPlace>;
  groupMatches: MatchType[];
}

interface GroupPlace {
  points: 0;
  goals: 0;
  team: Team;
}

type ArrayOfMaxLength4<T> = [T?, T?, T?, T?];
type ArrayOfMaxLength2<T> = [T?, T?];
