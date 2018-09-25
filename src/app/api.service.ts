import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class ApiService {
  constructor(private http: HttpClient) {}
  
  getFilms() {
    return this.http.get('https://swapi.co/api/films');
  }

  getFilm(id) {
    return this.http.get(`https://swapi.co/api/films/${id}`);
  }

  getPeople() {
    return this.http.get('https://swapi.co/api/people');
  }

  getPerson(id) {
    return this.http.get(`https://swapi.co/api/people/${id}`);
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets');
  }
  
  getPlanet(id) {
    return this.http.get(`https://swapi.co/api/planets/${id}`);
  }

}
