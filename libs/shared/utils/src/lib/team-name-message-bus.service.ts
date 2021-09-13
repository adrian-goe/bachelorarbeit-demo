import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamNameMessageBusService {

  private name = '';
  public teamName = new BehaviorSubject<string>('');

  constructor() {
    this.teamName.subscribe(teamName => {
      this.name = teamName;
    })
  }

  public resendMessage() {
    this.teamName.next(this.name);
  }
}
