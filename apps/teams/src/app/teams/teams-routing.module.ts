import {RouterModule, Routes} from "@angular/router";
import {OverviewComponent} from "./overview/overview.component";
import {DetailComponent} from "./detail/detail.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: OverviewComponent
  },
  {
    path: ':id', component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {


}
