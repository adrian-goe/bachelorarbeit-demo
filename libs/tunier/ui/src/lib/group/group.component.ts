import {Component, Input} from '@angular/core';
import {Placement} from "@tunierplanner/tunier/domain";

@Component({
  selector: 'tunierplanner-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  @Input()
  group: Placement[];

}
