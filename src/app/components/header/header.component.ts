import { Component } from '@angular/core';
import { Game } from '../../models/game'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  gameOne: Game =
    {
      name: "Olympic Game",
      year: 2028,
    }
  isVisible: boolean = true;





}
