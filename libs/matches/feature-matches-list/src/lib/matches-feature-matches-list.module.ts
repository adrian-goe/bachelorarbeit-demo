import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchesDomainModule} from '@tunierplanner/matches/domain';
import {MatchesListComponent} from './matches-list.component';
import {TeamsTeamsApiModule} from "@tunierplanner/teams/teams-api";
import {MatchesUiModule} from "@tunierplanner/matches/ui";

@NgModule({
  imports: [
    CommonModule,
    MatchesDomainModule,
    TeamsTeamsApiModule,
    MatchesUiModule
  ],
  declarations: [
    MatchesListComponent,

  ],
  exports: [
    MatchesListComponent
  ],
})
export class MatchesFeatureMatchesListModule {
}
