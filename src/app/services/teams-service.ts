import { Injectable } from '@angular/core';
import { Team } from '../models/team'

@Injectable({
  providedIn: 'root'
})

  
export class TeamsService {

  private teams: Team[] = [
    
    new Team('Usa-Team', 'description: string', 27, 0, '../assets/images/win.jpg', 776.77),
    new Team('Spain-Team', 'description: string', 27, 90,
      'https://media.istockphoto.com/id/515379862/fr/photo/en-ligne-de-sant%C3%A9-dentaire-formulaire-de-r%C3%A9clamation.jpg?s=1024x1024&w=is&k=20&c=rerGruZC4e3DpUD2D6K1N9B0cEqxd5glR0i9DirRrcY=', 790.809)
        
    
  ];

  getTeam(): Team[]{
    return [...this.teams]
  }
}
