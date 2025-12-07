import { interval, Observable, ObservableLike, Subject } from 'rxjs';
import { filter, take,debounceTime, distinctUntilChanged, map, switchMap, tap, takeUntil } from 'rxjs/operators';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

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
export class TeamListComponent implements OnInit, OnDestroy {

  interval$!: Observable<string>;
  monInterval$ !: Observable<number>;
  destroy$!: Subject<boolean>;

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
      takeUntil(this.destroy$),
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
      takeUntil(this.destroy$),
      filter(value => value % 2 == 0),
      tap(num => this.logger(num))
    );

    const interval2$ = interval(2000).pipe(
      takeUntil(this.destroy$),
      map(value => value * 10));
    setTimeout(() => interval2$.subscribe(val => console.log("hello",val)), 1000);
    


    this.searchInput.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      distinctUntilChanged(),
      map(searchTerm => searchTerm?.toLowerCase() || ''),
      map(searchTerm => this.teams.filter(team => team.title.toLowerCase().includes(searchTerm)))
    ).subscribe(filtered => {
      this.filteredTeams = filtered;
    }

    );






  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  logger(text: number) {
    // console.log(`log : ${text}`);  pareil
    console.log(`log : `, text);
  }









}
