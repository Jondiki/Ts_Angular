import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RacesComponent } from './components/races/races.component';
import { TeamComponent } from './components/team/team.component';
  type Person = {
    name: string;
    age: number;

  }
bootstrapApplication(RacesComponent)
  .catch((err) => console.error(err));
@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [RacesComponent, CommonModule,TeamComponent],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})



export class AppComponent {

  Employeur: Person =
    {
      name: "Dikizeyiko",
      age: 28,

    }

  isVisible: boolean = true;

}
