import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TeamsModule} from './teams/teams.module';
import {NgxsModule} from '@ngxs/store';
import {ShellModule} from './shell/shell.module';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([],
      {
        developmentMode: true,
      }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    TeamsModule,
    ShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
