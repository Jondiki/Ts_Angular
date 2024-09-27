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
  imageUrl!: string;

  ngOnInit(): void
  {
    this.title = 'USA-Team';
    this.description = 'My best friend';
    this.number = 28;
    this.imageUrl = "assets/images/win.jpg";
  }

  addNumber(): void {
    this.number += 1;
}


}

