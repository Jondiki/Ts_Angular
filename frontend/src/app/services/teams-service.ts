import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class TeamsService {
  // constructor(private http: HttpClient)
  // {

  // }

  private teams: Team[] = [

    new Team('France', 'description: string', 27, 0, '../assets/images/win.jpg', 776.77).withLocation('Amérique'),
    new Team('Usa', 'description: string', 27, 90, '../assets/images/win.jpg', 790.809),
    new Team('Urss', 'description: string', 27, 90, '../assets/images/win.jpg', 755.809),
    new Team('Use', 'description: string', 27, 90, '../assets/images/win.jpg', 890.809),
    new Team('Finlande', 'description: string', 27, 0, '../assets/images/win.jpg', 776.77).withLocation('Amérique'),
    new Team('Canada', 'description: string', 27, 150, '../assets/images/win.jpg', 790.809),

    new Team('Japan', 'description: string', 27, 200, '../assets/images/win.jpg', 599.209)


  ];

  // getTeam(): Team[]{
  //   return [...this.teams];
  // }

  // addTeam(team: Team) {
  //   this.teams.unshift(team);
  // }

  // ✅ Ajout de BehaviorSubject
  private teamsSubject = new BehaviorSubject<Team[]>([...this.teams]);

  // ✅ Observable à exposer
  public teams$ = this.teamsSubject.asObservable();

  getTeam(): Team[] {
    return [...this.teams];
  }

  addTeam(team: Team) {
    this.teams.unshift(team);
    this.teamsSubject.next([...this.teams]); // met à jour les abonnés
  }

  deleteTeam(title: string) {
    this.teams = this.teams.filter(team => team.title !== title);
    this.teamsSubject.next([...this.teams]);
    }
}
