import {Injectable} from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Hero} from "./app/models/hero";

@Injectable({
  providedIn : 'root'
})
export class InMemoryDataService  implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Hal Jordan' },
      { id: 14, name: 'Damian Wayne' },
      { id: 15, name: 'Green Arrow' },
      { id: 16, name: 'Batwoman' },
      { id: 17, name: 'Zatana' },
      { id: 18, name: 'Aquaman' },
      { id: 19, name: 'Red hood' },
      { id: 20, name: 'Wonder Woman' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
