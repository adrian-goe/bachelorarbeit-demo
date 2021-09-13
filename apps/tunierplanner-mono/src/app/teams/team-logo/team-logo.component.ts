import {Component, Input} from '@angular/core';

@Component({
  selector: 'tunierplanner-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.css']
})
export class TeamLogoComponent {

  @Input()
  name: string;

  getURL(): string {
    return `https://avatars.dicebear.com/api/jdenticon/${this.name}.svg`
  }
}
