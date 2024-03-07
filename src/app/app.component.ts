import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DashboardComponent],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tour-of-heroes';
}
