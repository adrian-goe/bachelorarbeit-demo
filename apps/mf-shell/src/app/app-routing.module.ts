import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {loadRemoteModule} from "@angular-architects/module-federation";

const routes: Routes = [
  {path: 'teams', loadChildren: () => import('teams/Teams').then(m => m.TeamsModule)},
  {
    path: 'tunier', loadChildren: () =>
      loadRemoteModule({
        remoteEntry: "http://localhost:4203/remoteEntry.js",
        remoteName: 'tunier',
        exposedModule: './Tunier'
      }).then(m => m.TunierModule)
  },
  {path: 'match-history', loadChildren: () => import('matches/Matches').then(m => m.MatchesModule)},
  {path: '**', redirectTo: 'teams'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
