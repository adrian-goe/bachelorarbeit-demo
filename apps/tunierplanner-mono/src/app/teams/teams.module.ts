import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamOverviewComponent} from './team-overview/team-overview.component';
import {TeamListComponent} from './team-list/team-list.component';
import {TeamDetailComponent} from './team-detail/team-detail.component';
import {TeamState} from '../state/team.state';
import {NgxsModule} from '@ngxs/store';
import {TeamLogoComponent} from './team-logo/team-logo.component';
import {TeamCreateComponent} from './team-create/team-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TeamsRoutingModule} from './teams-routing.module';

@NgModule({
  declarations: [
    TeamOverviewComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamLogoComponent,
    TeamCreateComponent
  ],
  exports: [
    TeamOverviewComponent,
    TeamLogoComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([TeamState])
  ]
})
export class TeamsModule {
}
