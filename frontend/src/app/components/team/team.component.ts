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



