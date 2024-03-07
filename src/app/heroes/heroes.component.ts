import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  template: `
    <!-- <div class="heroes"> -->
      <a class="hero" id="hero-one">{{ hero.name }}</a>
    <!-- </div> -->
  `,
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  @Input() hero!: Hero;
}
