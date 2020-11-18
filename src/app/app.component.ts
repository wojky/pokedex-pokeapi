import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Pokemon } from 'pokeapi';
import { PokedexService } from './pokedex/pokedex.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  maxOffset = this.pokemonService.maxOffset;
  pokemons$ = this.pokemonService.pokemons$;
  offset$ = this.pokemonService.offset$;
  isFetching$ = this.pokemonService.initialized$;

  constructor(private readonly pokemonService: PokedexService) {}

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonService.selectPokemon(pokemon);
  }

  getPreviousPage(): void {
    this.pokemonService.getPreviousPage();
  }

  getNextPage(): void {
    this.pokemonService.getNextPage();
  }
}
