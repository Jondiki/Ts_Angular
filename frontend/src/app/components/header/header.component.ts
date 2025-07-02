import { Component, OnInit, signal } from '@angular/core';
import { Game } from '../../models/game'
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive ,Router} from '@angular/router';
import { AppComponent } from '../../app.component';
import { Observable, interval } from 'rxjs';
@Component({
  selector: 'ns-header',
  standalone: true,

    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  private subscription :any;
  constructor(private router: Router) { }

  gameOne = signal <Game>(
    {
      name: "Olympic Game",
      year: 28,
    } )
  isVisible = signal(true);

  updateGame(newName : string, newYear : number)
  {
    this.gameOne.set(
      {
       name : newName,
       year : newYear,
      }
    )
  }


  addTeam() {
    this.router.navigateByUrl("add_team")
    console.info("hello");
  }

  ngOnInit() {

   

    const observer = {
      next: (item: unknown) => console.log(`Une boite arrive ${item}`),
      error: (err: unknown) => console.log(`Erreur : ${err}`),
      complete: () => console.log('Plus de boites')

    };
    const stream = new Observable(myObserver => {

      myObserver.next('Boite 2');
      // myObserver.unsubscribe();
      myObserver.next('Boite 4');

      myObserver.next('Boite 1');
      myObserver.error(new Error('Erreur de livraison'));
      myObserver.complete();

    });

    const subscription = stream.subscribe(
      item => console.log(`Reçu : ${item}`),
      err => console.log(`Error : ${err}`),
      () => console.log('Terminé')
    );

    subscription.unsubscribe();

  }


  public start(): void {
    // this.subscription = interval(1000).subscribe(
    //   value => console.log(`Valeur :`, value),
    //   error => console.error(error),
    //   () => console.log('Terminé')
    // )
  }
  public stop(): void {
    // this.subscription = interval(1000).subscribe(
    //   value => console.warn(`Valeur :`, value),
    //   error => console.error(error),
    //   () => console.log('Terminé')
    // )
  }



}



