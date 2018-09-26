import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../../api.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.page.html",
  styleUrls: ["./planets.page.scss"]
})
export class PlanetsPage implements OnInit {
  planets: Observable<any>;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.planets = this.api.getPlanets();
  }

  openDetails(planet) {
    let split = planet.url.split("/");
    let planetId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/(planets:planets/${planetId})`);
  }
}
