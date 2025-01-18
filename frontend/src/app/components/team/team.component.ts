import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle, UpperCasePipe, TitleCasePipe ,DecimalPipe, CurrencyPipe} from '@angular/common';
import { Team } from '../../models/team';

@Component({
  selector: 'ns-team',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle, TitleCasePipe, UpperCasePipe, DecimalPipe, CurrencyPipe, ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'

})
export class TeamComponent implements OnInit {

  @Input() myTeam !: Team;  // variable à injecter
  likeButtonText!: string;
  userHasLiked!: boolean;
  redcolor = 'red';
// ngOnInit  est une méthode du cycle de vie d'un composant Angular,
// qui est exécutée après que le constructeur a terminé l'initialisation de l'objet.

  ngOnInit(): void
  {
    this.likeButtonText = "Like"
    this.userHasLiked = true;
  }



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


}



