import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';
import { error } from 'console';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;
  private setAllPokemons: any;

  public apiError: boolean = false;

  constructor(private pokeApi: PokeapiService) {}

  ngOnInit(): void {
    this.pokeApi.apiListAllPokemons.subscribe(res => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    },
      error => {
        this.apiError = true;
      }

    );
  }

  public getSearch(value: string): void {
    if (!value.trim()) {
      // Se o valor estiver vazio, mostre todos os Pokémon novamente.
      this.getAllPokemons = this.setAllPokemons;
      return;
    }

    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase()) ? res : false;
    });
    // this.getAllPokemons = filter;
    this.getAllPokemons = filter.length > 0 ? filter : this.setAllPokemons;
    console.log(this.getAllPokemons); // Verifique o resultado filtrado
  }
}
