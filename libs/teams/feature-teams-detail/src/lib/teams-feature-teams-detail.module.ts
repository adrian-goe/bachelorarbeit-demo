import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamsDomainModule} from '@tunierplanner/teams/domain';
import {TeamsDetailComponent} from './teams-detail.component';
import {TeamDetailComponent} from './team-detail/team-detail.component';
import {TeamsUiModule} from "@tunierplanner/teams/ui";

@NgModule({
  imports: [
    CommonModule,
    TeamsDomainModule,
    TeamsUiModule
  ],
  declarations: [
    TeamsDetailComponent,
    TeamDetailComponent
  ],
  exports: [
    TeamsDetailComponent
  ],
})
export class TeamsFeatureTeamsDetailModule {
}
