import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchesUiModule} from "@tunierplanner/matches/ui";
import { MatchComponent } from './match/match.component';

@NgModule({
  imports: [CommonModule, MatchesUiModule],
  declarations: [MatchComponent],
  exports: [MatchComponent],
})
export class MatchesMatchesApiModule {
}
