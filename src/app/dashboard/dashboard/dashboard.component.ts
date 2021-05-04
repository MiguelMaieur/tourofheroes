import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {HeroService} from "../../service/hero/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _heroes: Array<Hero> = [];

  constructor(private service: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.service.heroes().subscribe(x => this._heroes = x.slice(1, 5));
  }

  get heroes(): Array<Hero> {
    return this._heroes;
  }
}
