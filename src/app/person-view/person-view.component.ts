import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Person } from '../people/person';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss']
})
export class PersonViewComponent implements OnInit {
  person$: Observable<Person>;

  constructor( private route: ActivatedRoute, private swapiService: SwapiService ) { }

  ngOnInit(): void {
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.swapiService.getPersonById(parseInt(params.get('id'))))
    );
  }

}
