import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamsDomainModule} from '@tunierplanner/teams/domain';
import {TeamsAddComponent} from './teams-add.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeamsDomainModule
  ],
  declarations: [
    TeamsAddComponent
  ],
  exports: [
    TeamsAddComponent
  ],
})
export class TeamsFeatureTeamsAddModule {
}
