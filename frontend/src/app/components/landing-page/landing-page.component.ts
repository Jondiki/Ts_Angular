import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { delay, mergeMap, Observable, of, tap } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'ns-landing-page',
  standalone: true,

    imports: [FormsModule, RouterLink],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) { }
    onContinue()
    {
      this.router.navigateByUrl("tablist")
      console.info("hello");
  }
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {

    //  Test observebles haut niveau

    //   interval(500).pipe(
    //     take(10),
    //     map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
    //     tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //     mergeMap(color => this.getTrainObservable$(color)),
    //     tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    //   ).subscribe();
    // }

    // getTrainObservable$(color: 'rouge' | 'jaune') {
    //   const isRedTrain = color === 'rouge';
    //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    //   return of({ color, trainIndex }).pipe(
    //     delay(isRedTrain ? 5000 : 6000)
    //   );
    // }

    // translateColor(color: 'rouge' | 'jaune') {
    //   return color === 'rouge' ? 'red' : 'yellow';
    // }




  }

}
