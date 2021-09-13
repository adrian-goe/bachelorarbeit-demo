import {Team} from "../types/team.type";

export class LoadTeamsAction {
  static readonly type = '[Team] Load All Teams';
}

export class AddTeamAction {
  static readonly type = '[Team] Add Team';

  constructor(public payload: Team) {
  }
}

export class SelectTeamAction {
  static readonly type = '[Team] Select Team';

  constructor(public payload: string) {
  }
}
