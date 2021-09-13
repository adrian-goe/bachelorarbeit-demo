import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamsDomainModule} from '@tunierplanner/teams/domain';
import {TeamsListComponent} from './teams-list.component';
import {TeamListEntryComponent} from './team-list-entry/team-list-entry.component';
import {TeamsUiModule} from "@tunierplanner/teams/ui";
import {TeamListComponent} from './team-list/team-list.component';
import {TeamsFeatureTeamsAddModule} from "@tunierplanner/teams/feature-teams-add";

@NgModule({
  imports: [
    CommonModule,
    TeamsDomainModule,
    TeamsUiModule,
    TeamsFeatureTeamsAddModule
  ],
  declarations: [
    TeamsListComponent,
    TeamListEntryComponent,
    TeamListComponent,
  ],
  exports: [
    TeamsListComponent,
  ],
})
export class TeamsFeatureTeamsListModule {
}
