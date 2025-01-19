import { Component, signal } from '@angular/core';
import { Game } from '../../models/game'
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
    selector: 'ns-header',
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
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



}
