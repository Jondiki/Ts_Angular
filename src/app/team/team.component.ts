import { Component } from '@angular/core';

@Component({
  selector: 'ns-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  title!: string;
  description!: string;
  number !: number;

  ngOnInit(): void
  {
    this.title = 'USA-Team';
    this.description = 'My best friend';
  }


}

