import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Placement} from '../../state/types/tunier.type';

@Component({
  selector: 'tunierplanner-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupComponent {

  @Input()
  group: Placement[];
}
