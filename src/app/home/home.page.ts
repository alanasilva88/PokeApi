import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, 
  imports: [PokemonListComponent], 
})
export class HomePage {
  constructor() { }
}
