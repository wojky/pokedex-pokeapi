import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navigation-bar',
  template: `
    <button
      (click)="getPreviousPage()"
      class="btn btn-primary"
      [disabled]="(offset$ | async) === 0"
    >
      previous
    </button>
    <button
      (click)="getNextPage()"
      class="btn btn-primary"
      [disabled]="(offset$ | async) === 130"
    >
      next
    </button>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
    `,
  ],
})
export class NavigationBarComponent {
  offset$ = this.pokedexService.offset$;

  constructor(private readonly pokedexService: PokedexService) {}

  getPreviousPage(): void {
    this.pokedexService.getPreviousPage();
  }

  getNextPage(): void {
    this.pokedexService.getNextPage();
  }
}
