import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full',
  },
  {
    path: 'pokedex',
    loadChildren: async () =>
      (await import('./pokedex/pokedex.module')).PokedexModule,
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)], // extra todo: add translate module
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
