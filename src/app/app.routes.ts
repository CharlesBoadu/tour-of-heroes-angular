import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'heroes/:id',
    component: HeroDetailsComponent,
    title: 'Selected Hero',
  },
  {
    path: 'heroes',
    component: AllHeroesComponent,
    title: 'All Heroes',
  },
];
