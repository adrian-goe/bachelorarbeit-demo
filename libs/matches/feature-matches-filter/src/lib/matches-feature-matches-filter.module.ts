import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesDomainModule } from '@tunierplanner/matches/domain';
import { MatchesFilterComponent } from './matches-filter.component';

@NgModule({
  imports: [CommonModule, MatchesDomainModule],
  declarations: [
    MatchesFilterComponent
  ],
  exports: [
    MatchesFilterComponent
  ],
})
export class MatchesFeatureMatchesFilterModule {}
