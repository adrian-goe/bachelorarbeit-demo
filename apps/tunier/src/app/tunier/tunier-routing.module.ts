import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TunierPageComponent} from "./tunier-page/tunier-page.component";

const routes: Routes = [
  {
    path: '',
    component: TunierPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TunierRoutingModule {
}
