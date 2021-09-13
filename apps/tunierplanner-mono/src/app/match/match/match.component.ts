import {Component, Input} from '@angular/core';
import { GroupMatch } from '../../state/types/tunier.type';

@Component({
  selector: 'tunierplanner-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  @Input() match: GroupMatch;

}
