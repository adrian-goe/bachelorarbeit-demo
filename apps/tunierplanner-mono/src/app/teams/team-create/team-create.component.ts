import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import Team from '../../state/types/team.type';


@Component({
  selector: 'tunierplanner-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent {

  @Output() team = new EventEmitter<Team>();
  @Output() closeAdd = new EventEmitter<null>();

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return this.formBuilder.group({
      teamName: '',
      teamCity: '',
      teamTrainer: ''
    });
  }

  onSubmit() {
    const values = this.contactForm.value;
    this.contactForm.reset();
    this.team.emit({name: values.teamName, ort: values.teamCity, trainer: values.teamTrainer});
  }

  close() {
    this.closeAdd.emit();
  }
}
