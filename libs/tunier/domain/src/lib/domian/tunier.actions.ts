import {GroupMatch} from "../types/group-match.type";

export class LoadTunierAction {
  static readonly type = '[Tunier] Load Tunier';
}

export class UpdateMatch {
  static readonly type = '[Tunier] Update Match';

  constructor(public payload: GroupMatch) {
  }
}
