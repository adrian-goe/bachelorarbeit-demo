import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Team} from "@tunierplanner/teams/domain";

@Component({
  selector: 'teams-teams-add',
  templateUrl: './teams-add.component.html',
  styleUrls: ['./teams-add.component.scss']
})
export class TeamsAddComponent {

  @Output() createTeam = new EventEmitter<Team>();
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
    this.createTeam.emit({name: values.teamName, ort: values.teamCity, trainer: values.teamTrainer});
  }

  close() {
    this.closeAdd.emit()
  }
}

