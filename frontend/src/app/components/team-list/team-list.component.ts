import { interval, Observable, ObservableLike } from 'rxjs';
import { filter, take,debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Team } from '../../models/team'
import {CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { TeamsService } from '../../services/teams-service';
import 'animate.css';
@Component({
  selector: 'ns-team-list',
  standalone: true,

    imports: [TeamComponent, CommonModule, ReactiveFormsModule],
    templateUrl: './team-list.component.html',
    styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  interval$!: Observable<string>;
  monInterval$ !: Observable<number>;


  teams!: Team[];
  filteredTeams!: Team[];

  // searchInput = document.getElementById("searchInput") as HTMLInputElement;
  searchInput = new FormControl();


  constructor(private teamsService: TeamsService) {

  }

  ngOnInit(): void {
    this.teamsService.teams$.subscribe((teams) => {
      this.teams = teams;
      this.filteredTeams = teams;
    });

    this.interval$ = interval(1000).pipe(
      //filter les emissions avec filter
      filter(value => value % 3 == 0),
      //transfomer les emissions avec map
      map(value => value % 2 === 0 ?
        `je suis ${value} paire` :
        `je suis ${value} impaire`
      ),
    // tap(text => this.logger(text))
    );
    // this.interval$.subscribe(value => console.log(value))
    // setTimeout(() => this.interval$.subscribe(value => console.log(value)), 5000);


    this.monInterval$ = interval(2000).pipe(
      filter(value => value % 2 == 0),
      tap(num => this.logger(num))
    );



    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(searchTerm => searchTerm?.toLowerCase() || ''),
      map(searchTerm => this.teams.filter(team => team.title.toLowerCase().includes(searchTerm)))
    ).subscribe(filtered => {
      this.filteredTeams = filtered;
    }

    );






  }





  logger(text: number) {
    // console.log(`log : ${text}`);  pareil
    console.log(`log : `, text);
  }









}
