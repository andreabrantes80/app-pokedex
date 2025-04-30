import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any = [];

  constructor(private pokeApi: PokeapiService) {}

  ngOnInit(): void {
    this.pokeApi.apiListAllPokemons.subscribe((res) => {
      this.getAllPokemons = res.results;

    });
  }

  public getSearch(value: string) {
    console.log(value);
  }
}
