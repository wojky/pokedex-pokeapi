import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

// todo: fill with more details
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-details',
  template: ` {{ (pokemon$ | async)?.name }} `,
})
export class PokemonDetailsComponent {
  pokemon$ = this.pokemonService.selectedPokemon$;

  constructor(private readonly pokemonService: PokemonService) {}
}
