export interface TunierType {
  groups: Group[];
}

export interface Group {
  id: string;
  teams: Team[];
  groupMatches: GroupMatch[];
  placement: Placement[];
}

export interface Placement {
  team: Team;
  points: number;
  shootGoals: number;
  gotGoals: number;
}

export interface GroupMatch {
  id: string;
  teamOne: Team;
  teamTwo: Team;
  teamOneGoals: number;
  teamTwoGoals: number;
  hasPlayed: boolean;
}

export interface Team {
  id: string;
  name: string;
  trainer: string;
  ort: string;
  groupId: string;
}
