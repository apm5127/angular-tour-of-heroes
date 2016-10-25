// Import Angular2 modules here
import { Injectable } from '@angular/core';

// Import components here
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Import Services here
// import {  } from 'module';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}
}