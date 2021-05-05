import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Hero} from "../models/hero";
import {HeroService} from "../service/hero/hero.service";
import {debounce, debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$ : Observable<Array<Hero>>;
  private searchTerms = new Subject<string>();

  constructor(private service : HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((trem : string) => this.service.searchHeroes(trem))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
