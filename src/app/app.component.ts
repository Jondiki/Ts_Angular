import { Component } from '@angular/core';
import { RacesComponent } from './races/races.component';
  type Person = {
    name: string;
    age: number;

  }

@Component({
  selector: 'ns-root',
  standalone: true,
  
  imports: [RacesComponent],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})



export class AppComponent {

  Employeur: Person =
    {
      name: "Dikizeyiko",
      age: 28,

  }

}
