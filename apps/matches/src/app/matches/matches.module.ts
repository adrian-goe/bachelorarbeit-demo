import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchesComponent} from './matches/matches.component';
import {MatchesFeatureMatchesListModule} from "@tunierplanner/matches/feature-matches-list";
import {RouterModule, Routes} from "@angular/router";
import {NgxsModule} from "@ngxs/store";
import {MatchesFeatureMatchesFilterModule} from "@tunierplanner/matches/feature-matches-filter";

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatchesFeatureMatchesFilterModule,
    MatchesFeatureMatchesListModule,
    NgxsModule.forFeature([]),
  ],
  declarations: [MatchesComponent],
})
export class MatchesModule {

}
