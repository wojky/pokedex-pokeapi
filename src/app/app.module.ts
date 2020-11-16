import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details.component';

const ROUTES = [
  {
    path: ':id',
    component: PokemonDetailsComponent,
  },
];
@NgModule({
  declarations: [AppComponent, PokemonDetailsComponent], // todo: move to pokemon module
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)], // extra todo: add translate module
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
