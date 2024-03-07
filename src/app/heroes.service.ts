import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroList: Hero[] = [
    { id: 1, name: 'Bombasto' },
    { id: 2, name: 'Celeritas' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'RubberMan' },
  ];

  getAllHeroes() {
    return this.heroList;
  }

  constructor() { 
  }
}
