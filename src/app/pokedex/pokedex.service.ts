import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject, forkJoin, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResourceList, Pokemon } from 'pokeapi';
import { NavigationEnd, Router } from '@angular/router';

export interface PokedexState {
  offset$: BehaviorSubject<number>;
  selectedPokemon$: ReplaySubject<Pokemon>;
  pokemons$: BehaviorSubject<Array<Pokemon>>;
  isFetchingData$: BehaviorSubject<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  public readonly maxOffset = 130;

  private readonly pokemonsPerPage = 20;
  private state: PokedexState = {
    selectedPokemon$: new ReplaySubject<Pokemon>(1),
    offset$: new BehaviorSubject<number>(0),
    pokemons$: new BehaviorSubject<Array<Pokemon>>([]),
    isFetchingData$: new BehaviorSubject<boolean>(true),
  };

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe((event) => {
        const param = +(event as NavigationEnd).url.replace('/pokedex/', '');

        if (!param) {
          this.init();
        } else {
          this.init({
            selectedPokemonId: param,
            offset: this.countStartingOffset(param),
          });
        }
      });
  }

  get selectedPokemon$(): Observable<Pokemon> {
    return this.state.selectedPokemon$.asObservable();
  }

  get pokemons$(): Observable<Array<Pokemon>> {
    return this.state.pokemons$.asObservable();
  }

  get initialized$(): Observable<boolean> {
    return this.state.isFetchingData$.asObservable();
  }

  get offset$(): Observable<number> {
    return this.state.offset$.asObservable();
  }

  getNextPage(): void {
    const currentOffset = this.state.offset$.getValue();
    const offset = currentOffset + 20;

    this.state.offset$.next(offset > this.maxOffset ? this.maxOffset : offset);
  }

  getPreviousPage(): void {
    const currentOffset = this.state.offset$.getValue();
    const offset = currentOffset - 20;

    this.state.offset$.next(offset < 0 ? 0 : offset);
  }

  selectPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/pokedex', pokemon.id]);
    this.state.selectedPokemon$.next(pokemon);
  }

  private getPokemonList(offset = 0): Observable<Array<Pokemon>> {
    // todo: caching?
    return this.http
      .get<APIResourceList<Pokemon>>(
        `${environment.apiUrl}/pokemon?limit=${this.pokemonsPerPage}&offset=${offset}`
      )
      .pipe(
        map((response: APIResourceList<Pokemon>) => {
          return response.results;
        }),
        switchMap((response) => {
          return forkJoin(
            response.map((pokemon) => this.http.get<Pokemon>(pokemon.url))
          );
        })
      );
  }

  private countStartingOffset(pokemonId: number): number {
    if (pokemonId > this.maxOffset) {
      return this.maxOffset;
    }

    let offset;
    const rest = pokemonId % 20;

    if (rest) {
      offset = pokemonId - (pokemonId % 20);
    } else {
      offset = pokemonId - 20;
    }

    return offset;
  }

  private init(
    startingParams?: {
      offset: number;
      selectedPokemonId: number;
    } | null
  ): void {
    if (startingParams) {
      this.state.offset$.next(startingParams.offset);
    }

    this.state.offset$
      .pipe(
        tap(() => {
          this.state.isFetchingData$.next(true);
        }),
        switchMap((offset) => this.getPokemonList(offset))
      )
      .subscribe((pkmns) => {
        if (startingParams) {
          this.state.selectedPokemon$.next(
            pkmns.find((p) => p.id === startingParams?.selectedPokemonId)
          );

          startingParams = null;
        }

        this.state.pokemons$.next(pkmns);
        this.state.isFetchingData$.next(false);
      });
  }
}
