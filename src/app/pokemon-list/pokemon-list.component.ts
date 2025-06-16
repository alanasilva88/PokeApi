import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  standalone: true,
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    try {
      this.pokemons = await this.pokeapiService.getPokemonList();
    } catch (error) {
      console.error('Erro ao carregar Pokémons', error);
    }
  }

}
