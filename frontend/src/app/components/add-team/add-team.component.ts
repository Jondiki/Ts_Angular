import { Component } from '@angular/core';
import { Team } from '../../models/team';
import { TeamsService } from '../../services/teams-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ns-add-team',
  standalone :true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss'
})
export class AddTeamComponent {
  constructor(private teamsService: TeamsService) { }

  formGroup = new FormGroup({
    titre : new FormControl('', [Validators.required]),
    price :new FormControl(0, [Validators.required, Validators.min(1), Validators.max(1000)])

  }

  );


  submit(event: Event) {
    event.preventDefault();

    const titre = this.formGroup.get('titre')?.value ?? '';
    const price = this.formGroup.get('price')?.value ?? 0

    const newTeam = new Team(titre, 'description: string', 27, 0, '../assets/images/win.jpg', price);
    this.teamsService.addTeam(newTeam);
    console.log(this.formGroup.get('titre')?.value)
  }
}
