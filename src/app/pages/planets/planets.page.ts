import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.planets = this.api.getPlanets();
  }

}
