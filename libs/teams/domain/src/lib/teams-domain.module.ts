import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {TeamState} from "./domain/team.state";

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([TeamState])
  ],
})
export class TeamsDomainModule {
}
