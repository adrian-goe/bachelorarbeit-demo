import Team from "../teams/team.type";

export interface MatchType {
  id: number;
  teamOne: Team;
  teamTwo: Team;
  teamOneScore: number;
  teamTwoScore: number;
  hasPlayed: boolean;
}
