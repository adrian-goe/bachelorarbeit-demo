import {GroupMatch} from "../../types/tunier.type";

export class LoadTunierAction {
  static readonly type = '[Tunier] Load Tunier';
}

export class UpdateMatch {
  static readonly type = '[Tunier] Update Match';

  constructor(public payload: GroupMatch) {
  }
}
