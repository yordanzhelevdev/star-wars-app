import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>

  constructor(
    private api: ApiService,
    private router: Router
    ) { }

  ngOnInit() {
    this.people = this.api.getPeople();
  }

  openDetails(person) {
    let split = person.url.split('/');
    let personId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/(people:people/${personId})`);
  }

}
