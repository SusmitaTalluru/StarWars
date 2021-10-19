import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Planet } from '../planets/planet';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.scss']
})
export class PlanetViewComponent implements OnInit {
  planet$: Observable<Planet>;

  constructor( private route: ActivatedRoute, private swapiService: SwapiService ) { }

  ngOnInit(): void {
    this.planet$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.swapiService.getPlanetById(parseInt(params.get('id'))))
    );
  }

}
