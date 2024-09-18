import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
type RaceModel = any;
@Component({
  selector: 'ns-races',
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./races.component.html",
  styleUrl: './races.component.css'
})
export class RacesComponent {
  races : Array<RaceModel> = [{ name: 'Paris' }, { name2: 'NewYork' }];
  firstName: String = "Angular Tutorial";
  version :number = 18 ;
  isActive: boolean = false;
  currentDate: Date = new Date();
    onButtonClick(): void {
  this.races = [{ name: 'London' }, { name2: 'Lyon' }];
  }
  inputType: string = "button";
}
