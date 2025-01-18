import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team'
import { DecimalPipe, PercentPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe, DatePipe, CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { TeamsService } from '../../services/teams-service';
import 'animate.css';
@Component({
  selector: 'ns-team-list',
  standalone: true,
  imports: [TeamComponent, CommonModule, DecimalPipe, PercentPipe, CurrencyPipe,  TitleCasePipe, UpperCasePipe, DatePipe],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {


  teams!: Team[];
  constructor(private teamsService: TeamsService) {

  }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeam();
  }




}
