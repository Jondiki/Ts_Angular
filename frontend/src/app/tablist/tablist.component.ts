
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../models/team';
import { TeamsService } from '../services/teams-service';

@Component({
  selector: 'ns-tablist',
  standalone: true,
  imports: [CommonModule],
  // Note: 'styleUrl' should be 'styleUrls' (plural) in Angular
  templateUrl: './tablist.component.html',
  styleUrl: './tablist.component.css'
})
export class TablistComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.teamService.teams$.subscribe((teams) => {
      this.teams = teams;
    });
  }
}
