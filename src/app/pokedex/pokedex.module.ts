import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { PokemonTileComponent } from './pokemon-tile/pokemon-tile.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonDetailsComponent,
    PokemonTileComponent,
    NavigationBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PokedexComponent,
        children: [
          {
            path: ':id',
            component: PokemonDetailsComponent,
          },
        ],
      },
    ]),
  ],
  exports: [],
  providers: [],
})
export class PokedexModule {}
