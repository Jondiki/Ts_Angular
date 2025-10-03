import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgClass, NgStyle, UpperCasePipe, TitleCasePipe ,DecimalPipe, CurrencyPipe} from '@angular/common';
import { Team } from '../../models/team';
import { TeamsService } from '../../services/teams-service';
import { interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';


@Component({
  selector: 'ns-team',
  standalone: true,
  imports: [CdkDrag,FormsModule, NgClass, NgStyle, UpperCasePipe, DecimalPipe],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {

  constructor(private teamsService: TeamsService) { }

  @Input() myTeam !: Team;  // variable à injecter
  likeButtonText!: string;
  userHasLiked!: boolean;
  redcolor = 'red';
// ngOnInit  est une méthode du cycle de vie d'un composant Angular,
// qui est exécutée après que le constructeur a terminé l'initialisation de l'objet.

  // ngOnInit(): void
  // {
//     this.likeButtonText = "Like"
// this.userHasLiked = true;
  // }


  redTrainsCalled:number = 0;
  yellowTrainsCalled:number = 0;

  ngOnInit() {
    this.likeButtonText = "Like"
    this.userHasLiked = true;

///test obsevables haut niveay
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      mergeMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }


  /// methodes sur chaques team

  onLike(): void {
    if (this.userHasLiked)
    {
      this.myTeam.addlike();
      this.likeButtonText = "Unlike";
      this.userHasLiked = false;
    } else
    {
      this.myTeam.deleteLike();
      this.likeButtonText = "Like"
      this.userHasLiked = true;
      }
  }


  deleteTeam(): void {
    this.teamsService.deleteTeam(this.myTeam.title);
  }


}



