import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; // CLI imports router

const routes: Routes = [
  {path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)},
  {path: 'tunier', loadChildren: () => import('./tunier/tunier.module').then(m => m.TunierModule)},
  {path: 'match-history', loadChildren: () => import('./match/match.module').then(m => m.MatchModule)},
  {path: '**', redirectTo: 'teams'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
