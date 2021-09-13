import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from "./overview/overview.component";
import {DetailComponent} from "./detail/detail.component";
import {TeamsFeatureTeamsListModule} from "@tunierplanner/teams/feature-teams-list";
import {TeamsFeatureTeamsDetailModule} from "@tunierplanner/teams/feature-teams-detail";
import {TeamsRoutingModule} from "./teams-routing.module";
import {NgxsModule} from "@ngxs/store";


@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    TeamsFeatureTeamsListModule,
    TeamsFeatureTeamsDetailModule,
    NgxsModule.forFeature([]),
  ],
  declarations: [OverviewComponent, DetailComponent],
})
export class TeamsModule {
}
