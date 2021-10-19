import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SwapiService } from '../swapi.service';
import { Movie } from './movie';


@Component({
  selector: 'app-movies',
  template: '<app-details [items]="movies"></app-details>',
  styleUrls: ['./movies.component.scss'],
  providers: [SwapiService]
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private swapiService: SwapiService,) { }

  ngOnInit(): void {

    this.getAllMovies();
  }

  getAllMovies(): void {
    this.swapiService.getAllMovies()
    .subscribe(
      (data: any) => {
        this.movies = data.results;
      }
    )
  }

}
