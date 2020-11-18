import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Pokemon } from 'pokeapi';
import { PokedexService } from './pokedex.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent {
  maxOffset = this.pokedexService.maxOffset;
  pokemons$ = this.pokedexService.pokemons$;
  isFetching$ = this.pokedexService.initialized$;

  constructor(private readonly pokedexService: PokedexService) {}

  selectPokemon(pokemon: Pokemon): void {
    this.pokedexService.selectPokemon(pokemon);
  }
}
