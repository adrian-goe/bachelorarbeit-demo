import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TunierDomainModule} from '@tunierplanner/tunier/domain';
import {GroupMatchesComponent} from './group-matches.component';
import {MatchesMatchesApiModule} from "@tunierplanner/matches/matches-api";

@NgModule({
  imports: [CommonModule, TunierDomainModule, MatchesMatchesApiModule],
  declarations: [
    GroupMatchesComponent
  ],
  exports: [
    GroupMatchesComponent
  ],
})
export class TunierFeatureGroupMatchesModule {
}
