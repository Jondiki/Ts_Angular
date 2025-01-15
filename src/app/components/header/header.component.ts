import { Component, signal } from '@angular/core';
import { Game } from '../../models/game'
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [CommonModule,MatButtonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  gameOne = signal <Game>(
    {
      name: "Olympic Game",
      year: 2028,
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
