import {Component, OnInit} from '@angular/core';
import {Hero} from "../models/hero";
import {HeroService} from "../service/hero/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private _heroes: Array<Hero>;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroService.heroes().subscribe(x => this._heroes = x);
  }

  get heroes(): Array<Hero> {
    return this._heroes;
  }

  add(name: string) {
    name = name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as Hero).subscribe(x => this._heroes.push(x));
  }

  delete(hero: Hero) {
    this._heroes = this._heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();

  }
}
