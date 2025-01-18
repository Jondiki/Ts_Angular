import { Injectable } from '@angular/core';
import { Team } from '../models/team'

@Injectable({
  providedIn: 'root'
})


export class TeamsService {

  private teams: Team[] = [

    new Team('France', 'description: string', 27, 0, '../assets/images/win.jpg', 776.77).withLocation('Amérique'),
    new Team('Usa', 'description: string', 27, 90, '../assets/images/win.jpg', 790.809),
    new Team('Canada', 'description: string', 27, 150, '../assets/images/win.jpg', 790.809),

    new Team('Japan', 'description: string', 27, 200, '../assets/images/win.jpg', 599.209)


  ];

  getTeam(): Team[]{
    return [...this.teams];
  }
}
