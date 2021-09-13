import {Component} from '@angular/core';

interface RoutingModle {
  path: string;
  name: string
}

@Component({
  selector: 'tunierplanner-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  routes: RoutingModle[] = [
    {path: '/teams', name: 'Teams'},
    {path: '/tunier', name: 'Tunier'},
    {path: '/match-history', name: 'Match History'}
  ]
}
