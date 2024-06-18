import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="content">
      <main>
        <h1>Tour of Heroes</h1>
        <nav>
          <a [routerLink]="['']" id="dashboard-link"><span>Dashboard</span></a>
          <a [routerLink]="['/heroes']" id="heroes-link"><span>Heroes</span></a>
        </nav>
        <section class="heroes-list">
          <h4>My Heroes</h4>
        </section>
        <div
          class="hero-container"
          *ngFor="let hero of heroList"
          [routerLink]="['/heroes', hero?.id]"
        >
          <div class="hero-number">{{ hero?.id }}</div>
          <div class="hero-name">{{ hero?.name }}</div>
        </div>
      </main>
    </section>
  `,
  styleUrl: './all-heroes.component.css',
})
export class AllHeroesComponent {
  @Input() hero!: Hero;
  heroList: Hero[] = [];

  heroesService: HeroesService = inject(HeroesService);

  constructor() {
    this.heroList = this.heroesService.getAllHeroes();
  }
}
