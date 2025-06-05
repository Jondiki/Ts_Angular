import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RacesComponent } from './components/races/races.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

bootstrapApplication(RacesComponent)
  .catch((err) => console.error(err));
@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {

  ngOnInit() {


  const observer = {
    next: (item: unknown) => console.log(`Une boite arrive ${item}`),
    error: (err: unknown) => console.log(`Erreur : ${err}`),
    complete: () => console.log('Plus de boites')

    };
    const stream = new Observable((myObserver =>
    {

      myObserver.next('Boite 1');
      myObserver.next('Boite 2');
      myObserver.next('Boite 3');
      myObserver.error('Erreur de la boite 4');
      myObserver.complete();
    }
    ))
}

}

