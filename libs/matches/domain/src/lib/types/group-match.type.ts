import {MatchTeam} from "./match-team.type";

export interface GroupMatch {
  id: string;
  teamOne: MatchTeam;
  teamTwo: MatchTeam;
  teamOneGoals: number;
  teamTwoGoals: number;
  hasPlayed: boolean;
}

