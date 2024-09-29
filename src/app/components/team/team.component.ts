import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ns-team',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'

})
export class TeamComponent {

  title!: string;
  description!: string;
  number !: number;
  like !: number;
  imageUrl!: string;
  likeButtonText!: string;
  userHasLiked!: boolean;

  ngOnInit(): void
  {
    this.title = 'USA-Team';
    this.description = 'My best friend';
    this.number = 28;
    this.like = 0;
    this.imageUrl = "assets/images/win.jpg";
    this.likeButtonText = "Like"
    this.userHasLiked = true;
  }

  onLike(): void {

    if (this.userHasLiked)
    {
      this.like++;
      this.likeButtonText = "Liked";
      this.userHasLiked = false;
    } else
    {
      this.like--;
      this.likeButtonText = "Like"
      this.userHasLiked = true;
      }
  }



}

