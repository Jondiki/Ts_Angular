import { Component, signal } from '@angular/core';
import { Game } from '../../models/game'
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive ,Router} from '@angular/router';
@Component({
  selector: 'ns-header',
  standalone: true,

    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
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


}
