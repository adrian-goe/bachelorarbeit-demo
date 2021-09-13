import {Component} from '@angular/core';

@Component({
  selector: 'tunierplanner-tunier-tree',
  templateUrl: './tunier-tree.component.html',
  styleUrls: ['./tunier-tree.component.css']
})
export class TunierTreeComponent {
  match = {
    teamOne: 'Team1',
    teamTwo: 'Team4',
    teamOneScore: 1,
    teamTwoScore: 0
  }
}
