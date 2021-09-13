import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupComponent} from './group/group.component';
import {TeamsTeamsApiModule} from "@tunierplanner/teams/teams-api";

@NgModule({
  imports: [CommonModule, TeamsTeamsApiModule],
  declarations: [GroupComponent],
  exports: [GroupComponent],
})
export class TunierUiModule {
}
