import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
  imports: [RacesComponent, CommonModule, TeamComponent],
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




  team1!: Team;
  team2!: Team;

  ngOnInit(): void {
    this.team1 = new Team
      (
        'Usa-Team',
        'description: string',
        27,
        0,
        '../assets/images/win.jpg');

    this.team2 = new Team
      (
        'Spain-Team',
        'description: string',
        27,
        0,
        '../assets/images/win.jpg');
  }



}

