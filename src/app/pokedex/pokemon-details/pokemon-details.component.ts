import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styles: [
    `
      img {
        width: 150px;
      }
    `,
  ],
})
export class PokemonDetailsComponent {
  @ViewChild('img') img!: HTMLImageElement;
  pokemon$ = this.pokemonService.selectedPokemon$;
  isPokemonFrontView = true;

  // todo: create custom colors for pokemon badges
  private colorsMap = new Map([
    ['grass', 'success'],
    ['fire', 'danger'],
    ['flying', 'light'],
    ['water', 'info'],
    ['poison', 'dark'],
    ['rock', 'secondary'],
    ['electric', 'warning'],
    ['psychic', 'primary'],
  ]);

  constructor(private readonly pokemonService: PokedexService) {}

  rotatePokemon(): void {
    this.isPokemonFrontView = !this.isPokemonFrontView;
  }

  getTypeBadgeClass(typeName: string): string {
    return `badge-${this.colorsMap.get(typeName)}`;
  }
}
