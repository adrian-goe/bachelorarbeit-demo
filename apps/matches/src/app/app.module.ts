import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {RouterModule, Routes} from "@angular/router";
import {TeamsMatchesModule} from "./matches/teams-matches/teams-matches.module";

const routes: Routes = [
  {
    path: 'match-history',
    loadChildren: () => import('./matches/matches.module')
      .then(m => m.MatchesModule)
  },
  {path: '**', redirectTo: 'match-history'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([],
      {
        developmentMode: true,
      }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    TeamsMatchesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
