import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchesListComponent} from "./matches-list/matches-list.component";
import {MatchesFeatureMatchesListModule} from "@tunierplanner/matches/feature-matches-list";


@NgModule({
  declarations: [MatchesListComponent],
  imports: [
    CommonModule,
    MatchesFeatureMatchesListModule,
  ],
  entryComponents: [MatchesListComponent],

})
export class TeamsMatchesModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }


  public resolveComponent(): ComponentFactory<MatchesListComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(MatchesListComponent);
  }
}
