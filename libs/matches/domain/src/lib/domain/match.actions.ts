export class LoadMatchesAction {
  static readonly type = '[Match] Load All Matches';
}

export class FilterTeamAction {
  static readonly type = '[Match] Filter Matches By Team Name';

  constructor(public payload: string){}
}
