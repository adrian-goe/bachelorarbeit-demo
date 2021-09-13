import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {TunierModule} from "./tunier/tunier.module";

const routes: Routes = [
  {
    path: 'tunier',
    loadChildren: () => import('./tunier/tunier.module')
      .then(m => m.TunierModule)
  },
  {path: '**', redirectTo: 'tunier'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([],
      {
        developmentMode: true,
      }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    TunierModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
