import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamOverviewComponent} from './team-overview/team-overview.component';
import {TeamDetailComponent} from "./team-detail/team-detail.component";


const routes: Routes = [
  {
    path: '',
    component: TeamOverviewComponent
  },
  {
    path: ':id',
    component: TeamDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {
}
