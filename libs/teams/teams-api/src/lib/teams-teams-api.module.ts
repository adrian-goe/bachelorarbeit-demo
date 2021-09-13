import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamIconNameComponent} from './team-icon-name/team-icon-name.component';
import {TeamsUiModule} from "@tunierplanner/teams/ui";

@NgModule({
  imports: [
    CommonModule,
    TeamsUiModule
  ],
  declarations: [TeamIconNameComponent],
  exports: [TeamIconNameComponent]
})
export class TeamsTeamsApiModule {
}
