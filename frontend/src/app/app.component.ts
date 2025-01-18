import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RacesComponent } from './components/races/races.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Team } from './models/team';
import { TeamListComponent } from './components/team-list/team-list.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

bootstrapApplication(RacesComponent)
  .catch((err) => console.error(err));
@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [ RouterOutlet, MatSlideToggleModule,RacesComponent, CommonModule, HeaderComponent, TeamListComponent,
    DecimalPipe, PercentPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe, DatePipe],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})



export class AppComponent {





}

