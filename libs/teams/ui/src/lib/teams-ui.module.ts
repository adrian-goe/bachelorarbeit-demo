import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamLogoComponent} from './team-logo/team-logo.component';
import {TeamIconNameComponent} from './team-icon-name/team-icon-name.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TeamLogoComponent,
    TeamIconNameComponent
  ],
  exports: [
    TeamLogoComponent,
    TeamIconNameComponent
  ],
})
export class TeamsUiModule {
}
