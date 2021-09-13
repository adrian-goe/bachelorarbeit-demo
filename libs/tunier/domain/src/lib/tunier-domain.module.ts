import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {TunierState} from "./domian/tunier.state";

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([TunierState])
  ],
})
export class TunierDomainModule {
}
