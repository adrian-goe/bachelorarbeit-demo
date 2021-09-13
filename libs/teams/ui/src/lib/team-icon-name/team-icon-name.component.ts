import {Component, Input} from '@angular/core';

@Component({
  selector: 'tunierplanner-team-ui-icon-name',
  templateUrl: './team-icon-name.component.html',
  styleUrls: ['./team-icon-name.component.css']
})
export class TeamIconNameComponent {

  @Input() teamName: string;
  @Input() placement: "left" | "right" | "default" = "default";
}
