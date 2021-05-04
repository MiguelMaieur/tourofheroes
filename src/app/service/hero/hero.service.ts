import {Injectable} from '@angular/core';
import {Hero} from "../../models/hero";
import {HEROES} from "../../mock/mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "../message/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService : MessageService) {
  }

  heroes(): Observable<Array<Hero>> {
    const herolist = of(HEROES);
    this.messageService.add('HeroService : fetched heroes!');
    return herolist;
  }

  getHero(id : number):Observable<Hero>{
    const hero = HEROES.find(x => x.id === id) as Hero;
    this.messageService.add(`HeroService : fetched hero id = ${id}`);
    return of(hero);
  }
}
