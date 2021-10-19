import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'

import { Movie } from '../movies/movie';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor( private route: ActivatedRoute, private swapiService: SwapiService ) { }

  ngOnInit(): void {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.swapiService.getMovieById(parseInt(params.get('id'))))
    );
  }

}
