import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TunierpageComponent} from "./tunierpage/tunierpage.component";

const routes: Routes = [
  {
    path: '',
    component: TunierpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TunierRoutingModule {
}
