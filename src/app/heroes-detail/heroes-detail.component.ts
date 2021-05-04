import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../models/hero";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../service/hero/hero.service";

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  @Input() hero? : Hero;

  constructor(private route : ActivatedRoute,private service : HeroService,private location : Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  private getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getHero(id).subscribe(x => this.hero = x);
  }

  goBack(): void {
    this.location.back();
  }


  // @Input()
  // hero():Hero{
  //   return _hero;
  // }
}
