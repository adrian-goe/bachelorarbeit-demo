import {Component} from '@angular/core';
import {GroupFacade} from '@tunierplanner/tunier/domain';

@Component({
  selector: 'tunier-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  groupPlaces$ = this.groupFacade.groupPlacements$

  constructor(private groupFacade: GroupFacade) {
  }
}

