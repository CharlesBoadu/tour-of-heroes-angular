import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: ` <section class="content">
    <main>
      <h1>Tour of Heroes</h1>
      <nav>
        <a [routerLink]="['']" id="dashboard-link"><span>Dashboard</span></a>
        <a [routerLink]="['/heroes']" id="heroes-link"><span>Heroes</span></a>
      </nav>
      <section class="hero-details">
        <h3>{{hero?.name?.toUpperCase()}} Details</h3>
      </section>
      <div>
        id: {{hero?.id}}
      </div>
      <div class="hero-name">
        Hero name: <input type="text" class="hero-input">
      </div>
      <a [routerLink]="['']" id="back-button"><span>Back</span></a>
    </main>
    
  </section>`,
  styleUrl: './hero-details.component.css',
})
export class HeroDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  heroesService: HeroesService = inject(HeroesService);
  hero: Hero | undefined;

  constructor() {
    const heroId = parseInt(this.route.snapshot.params['id'], 10);
    this.hero = this.heroesService.getHeroById(heroId);
  }
}
