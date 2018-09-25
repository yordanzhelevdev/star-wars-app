import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

import { TabsPageRoutingModule } from './tabs.router.module';
import { FilmsPageModule } from '../films/films.module';
import { PeoplePageModule } from "./../people/people.module";
import { PlanetsPageModule } from './../planets/planets.module';


import { PeopleDetailsPageModule } from './../people-details/people-details.module';
import { PlanetDetailsPageModule } from './../planet-details/planet-details.module';
import { FilmDetailsPageModule } from './../film-details/film-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    FilmsPageModule,
    PlanetsPageModule,
    PeoplePageModule,
    FilmDetailsPageModule,
    PeopleDetailsPageModule,
    PlanetDetailsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
