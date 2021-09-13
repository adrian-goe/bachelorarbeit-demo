import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchPageComponent} from './match-page/match-page.component';
import {RouterModule, Routes} from "@angular/router";
import {MatchComponent} from "./match/match.component";
import {NgxsModule} from "@ngxs/store";
import {MatchState} from "../state/match.state";

const routes: Routes = [
  {
    path: '',
    component: MatchPageComponent
  }
];

@NgModule({
  declarations: [MatchPageComponent, MatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([MatchState]),
  ]
})
export class MatchModule {
}
