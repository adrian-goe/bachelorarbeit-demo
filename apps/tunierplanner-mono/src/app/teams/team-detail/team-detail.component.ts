import {Component} from '@angular/core';
import {TeamState} from "../../state/team.state";
import {Observable} from "rxjs";
import Team from "../../state/types/team.type";
import {Select} from "@ngxs/store";
import {Location} from '@angular/common';

@Component({
  selector: 'tunierplanner-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {

  @Select(TeamState.selectedTeam) selectedTeam$: Observable<Team>

  selectedTeam: Team;

  constructor(private readonly location: Location) {
    this.selectedTeam$.subscribe(team => {
      console.log(team)
      this.selectedTeam = team
    });
  }

  getURL(): string {
    return `https://avatars.dicebear.com/api/jdenticon/${this.selectedTeam.name}.svg`
  }

  back() {
    this.location.back();
  }
}
