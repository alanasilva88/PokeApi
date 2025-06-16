import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2';

  constructor() {}

  async getPokemonList() {
    try {
      const response = await axios.get(`${this.apiUrl}/pokemon?limit=10`);
      return response.data.results; // Lista de Pokémon
    } catch (error) {
      console.error('Erro ao buscar dados da PokeAPI', error);
      throw error;
    }
  }

  async getPokemonDetails(pokemonName: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/pokemon/${pokemonName}`);
      return response.data; // Detalhes do Pokémon
    } catch (error) {
      console.error('Erro ao buscar detalhes do Pokémon', error);
      throw error;
    }
  }
}
