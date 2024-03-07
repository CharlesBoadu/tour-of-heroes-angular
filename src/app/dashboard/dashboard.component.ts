import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, HeroesComponent, CommonModule],
  templateUrl: `dashboard.component.html`,
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @Input() hero!: Hero;
  heroList: Hero[] = []
  heroesService: HeroesService = inject(HeroesService);

  constructor() {
    this.heroList = this.heroesService.getTopHeroes();
  }
}
