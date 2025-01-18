import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'ns-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router) { }
    onContinue()
    {
      this.router.navigateByUrl("teams")
      console.info("hello");
  }
  

}
