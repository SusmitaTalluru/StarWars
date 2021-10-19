import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


import { Movie } from './movies/movie';
import { Person } from './people/person';
import { Planet } from './planets/planet';

const SwapiURL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor( private http: HttpClient ) { }

  // Get list of all movies
  public getAllMovies() {
    const url = `${SwapiURL}/films/`;
    return this.http.get(url)
    .pipe(
      map((data: Movie[]) => {
        return data;
      })
    );
  }

  // Get details of a movie
  public getMovieById(movieId: number) {
    const url = `${SwapiURL}/films/${movieId}/`;
    return this.http.get<Movie>(url);
  }

  // Get list of people
  public getAllPeople(): Observable<Person[]> {
    const url = `${SwapiURL}/people/`;
    return this.http.get(url)
    .pipe(
      map((data: Person[]) => {
        return data;
      })
    );
  }

  // Get details of selected person
  public getPersonById(personId: number): Observable<Person> {
    const url = `${SwapiURL}/people/${personId}/`;
    return this.http.get<Person>(url);
  }

  // Get all planets
  public getAllPlanets() {
    const url = `${SwapiURL}/planets/`;
    return this.http.get(url)
    .pipe(
      map((data: Planet[]) => {
        return data;
      })
    );
  }

  // Get details of selected planet
  public getPlanetById(planetId: number) {
    const url = `${SwapiURL}/planets/${planetId}/`;
    return this.http.get<Planet>(url);
  }

}
