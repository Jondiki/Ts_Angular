import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RacesComponent } from './components/races/races.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { Observable, interval } from 'rxjs';


@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {

  ngOnInit() {




}



}

