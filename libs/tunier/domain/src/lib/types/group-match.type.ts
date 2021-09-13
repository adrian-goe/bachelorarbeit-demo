import {TunierTeam} from "./team.type";

export interface GroupMatch {
  id: string;
  teamOne: TunierTeam;
  teamTwo: TunierTeam;
  teamOneGoals: number;
  teamTwoGoals: number;
  hasPlayed: boolean;
}
