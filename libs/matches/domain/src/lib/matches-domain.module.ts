import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {MatchState} from "./domain/match.state";

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([MatchState])
  ],
})
export class MatchesDomainModule {
}
