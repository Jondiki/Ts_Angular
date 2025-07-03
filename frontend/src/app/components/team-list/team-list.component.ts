import { interval, Observable, ObservableLike } from 'rxjs';
import {filter, map, tap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team'
import {CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { TeamsService } from '../../services/teams-service';
import 'animate.css';
@Component({
  selector: 'ns-team-list',
  standalone: true,

    imports: [TeamComponent, CommonModule,],
    templateUrl: './team-list.component.html',
    styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  interval$!: Observable<string>;
  teams!: Team[];
  constructor(private teamsService: TeamsService) {

  }

  ngOnInit(): void {
    this.teamsService.teams$.subscribe((teams) => {
      this.teams = teams;
    });

    this.interval$ = interval(1000).pipe(
      //filter les emissions avec filter   
      filter(value => value % 3 == 0),
      //transfomer les emissions avec map
      map(value => value % 2 === 0 ?
        `je suis ${value} paire` :
        `je suis ${value} impaire`
      ), 
    
    tap(text => this.logger(text))
    );  
    
    // this.interval$.subscribe(value => console.log(value))
    // setTimeout(() => this.interval$.subscribe(value => console.log(value)), 5000);

  }

  logger(text: string) {
    console.log(`log : ${text}`);
  }




}
