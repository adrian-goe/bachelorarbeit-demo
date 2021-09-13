import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TunierPageComponent} from './tunier-page/tunier-page.component';
import {TunierRoutingModule} from "./tunier-routing.module";
import {TunierFeatureGroupModule} from "@tunierplanner/tunier/feature-group";
import {TunierFeatureGroupMatchesModule} from "@tunierplanner/tunier/feature-group-matches";
import {NgxsModule} from "@ngxs/store";


@NgModule({
  declarations: [TunierPageComponent],
  imports: [
    CommonModule,
    TunierRoutingModule,
    TunierFeatureGroupModule,
    TunierFeatureGroupMatchesModule,
    NgxsModule.forFeature([]),
  ]
})
export class TunierModule {
}
