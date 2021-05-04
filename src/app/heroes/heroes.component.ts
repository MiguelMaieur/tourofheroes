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
}
