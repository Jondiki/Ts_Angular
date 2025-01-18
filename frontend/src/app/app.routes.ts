import { Routes } from '@angular/router'
import { TeamListComponent } from './components/team-list/team-list.component'
import { TeamComponent } from './components/team/team.component'
import { MailComponent } from './components/mail/mail.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'teams', component: TeamListComponent },
  { path: 'mail', component: MailComponent },
  { path: 'team', component: TeamComponent }

]
