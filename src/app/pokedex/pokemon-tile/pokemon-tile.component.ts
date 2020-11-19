import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Pokemon } from 'pokeapi';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-tile',
  template: `
    <!-- todo: add skeleton mock -->
    <img
      [src]="pokemon.sprites.front_default"
      class="cursor-pointer"
      (click)="choose.emit(pokemon)"
    />
    <span class="text-center cursor-normal"> {{ pokemon.name }}</span>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: fit-content;
      }

      img {
        width: 96px;
        height: 96px;
      }
    `,
  ],
})
export class PokemonTileComponent {
  @Input() pokemon!: Pokemon;
  @Output() choose: EventEmitter<Pokemon> = new EventEmitter();
}
