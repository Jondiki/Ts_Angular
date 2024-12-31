import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RacesComponent } from './components/races/races.component';
import { TeamComponent } from './components/team/team.component';
import { Team } from './models/team';
type Game = {
  name: string;
  year: number;

}
bootstrapApplication(RacesComponent)
  .catch((err) => console.error(err));
@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [RacesComponent, CommonModule, TeamComponent, TitleCasePipe, UpperCasePipe],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})



export class AppComponent {

  gameOne: Game =
    {
      name: "Olympic Game",
      year: 2024,
    }
  isVisible: boolean = true;







  teams!: Team[];
  team1!: Team;
  team2!: Team;

  ngOnInit(): void {
    this.teams = [
      new Team(
        'Usa-Team',
        'description: string',
        27,
        0,
        '../assets/images/win.jpg',
      770.77),

      new Team
        (
          'Spain-Team',
          'description: string',
          27,
          0,
          'https://media.istockphoto.com/id/515379862/fr/photo/en-ligne-de-sant%C3%A9-dentaire-formulaire-de-r%C3%A9clamation.jpg?s=1024x1024&w=is&k=20&c=rerGruZC4e3DpUD2D6K1N9B0cEqxd5glR0i9DirRrcY=',
        790.09)
    ];
}



}

