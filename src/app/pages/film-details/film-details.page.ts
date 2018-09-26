import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../api.service";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FavoriteService } from './../../services/favorite.service';

@Component({
  selector: "app-film-details",
  templateUrl: "./film-details.page.html",
  styleUrls: ["./film-details.page.scss"]
})
export class FilmDetailsPage implements OnInit {
  isFavorite: boolean = false;
  filmId =  null;
  film: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private emailComposer: EmailComposer,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

    this.favoriteService.isFavorite(this.filmId).then(isFav => {
      this.isFavorite = isFav;
    });

    this.api.getFilm(this.filmId).subscribe(res => {
      this.film = res;
    });
  }

  favoriteFilm() {
    this.favoriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteService.unfavoriteFilm(this.filmId).then( () => {
      this.isFavorite = false;
    });
  }

  shareFilm() {
    let email = {
      to: 'saimon@devdactic.com',
      subject: 'I love this one ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
