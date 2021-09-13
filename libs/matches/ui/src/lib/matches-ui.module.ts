import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchComponent} from "./match/match.component";
import {TeamsTeamsApiModule} from "@tunierplanner/teams/teams-api";

@NgModule({
  imports: [CommonModule, TeamsTeamsApiModule],
  declarations: [MatchComponent],
  exports: [MatchComponent]
})
export class MatchesUiModule {
}
