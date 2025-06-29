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


  teams!: Team[];
  constructor(private teamsService: TeamsService) {

  }

  ngOnInit(): void {
    this.teamsService.teams$.subscribe((teams) => {
      this.teams = teams;
    });
  }




}
