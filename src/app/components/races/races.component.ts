import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

type RaceModel = any;
@Component({
  selector: 'ns-races',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: "./races.component.html",
  styleUrl: './races.component.css'

})
export class RacesComponent {
  races : Array<RaceModel> = [{ name: 'Paris' }, { name: 'NewYork' }];
  firstName: String = "Angular Tutorial";
  version :number = 18 ;
  isActive: boolean = false;
  currentDate: Date = new Date();
    onButtonClick(): void {
  this.races = [{ name:'London' }, { name: 'Lyon' }];
  }
  inputType: string = "button";
}
