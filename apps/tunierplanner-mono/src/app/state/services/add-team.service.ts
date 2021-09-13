import {Injectable} from '@angular/core';
import Team from '../types/team.type';

@Injectable({
  providedIn: 'root'
})
export class AddTeamService {
  constructor() {
  }

  addTeam(team: Team) {
    console.log('added team', team)
  }
}
