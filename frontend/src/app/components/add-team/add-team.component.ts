import { Component } from '@angular/core';
import { Team } from '../../models/team';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ns-add-team',
  standalone :true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss'
})
export class AddTeamComponent {

  formGroup = new FormGroup({
    titre : new FormControl('', [Validators.required]),
    price :new FormControl(0, [Validators.required, Validators.min(1), Validators.max(1000)])

  }

  );


  submit(event: Event) {
    event.preventDefault();
    console.log(this.formGroup.get('titre')?.value)
  }
}
