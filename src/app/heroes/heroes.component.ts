import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="hero" [routerLink]="['/heroes', hero.id]">{{ hero.name }}</a>
  `,
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  @Input() hero!: Hero;
}
