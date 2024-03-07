import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  heroList: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  getAllHeroes() {
    return this.heroList;
  }

  getTopHeroes() {
    return this.heroList.slice(1, 5);
  }

  getHeroById(id: number) {
    return this.heroList.find(hero => hero.id === id);
  }

  constructor() { 
  }
}
