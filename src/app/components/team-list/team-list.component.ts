import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team'
import { DecimalPipe, PercentPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe, DatePipe, CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
@Component({
  selector: 'ns-team-list',
  standalone: true,
  imports: [TeamComponent, CommonModule, DecimalPipe, PercentPipe, CurrencyPipe,  TitleCasePipe, UpperCasePipe, DatePipe],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {


  teams!: Team[];
  // team1!: Team;
  // team2!: Team;

  ngOnInit(): void {
    this.teams = [
      new Team('Usa-Team','description: string',27,0,'../assets/images/win.jpg',776.77),
      new Team('Spain-Team', 'description: string', 27, 90,
        'https://media.istockphoto.com/id/515379862/fr/photo/en-ligne-de-sant%C3%A9-dentaire-formulaire-de-r%C3%A9clamation.jpg?s=1024x1024&w=is&k=20&c=rerGruZC4e3DpUD2D6K1N9B0cEqxd5glR0i9DirRrcY=', 790.809)
    ];
  }


  

}
