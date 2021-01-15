import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-pokedex',
  templateUrl: './listar-pokemon.component.html',
  styleUrls: ['./listar-pokemon.component.css']
})
export class ListarPokemonComponent implements OnInit {
  public pokemons: Pokemon[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getListaPokemons();
  }

  getListaPokemons() {
    this.pokemonService.getListaPokemons()
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      }, () => { this.errorMsgComponent.setError('Falha ao carregar a lista dos pokemons.'); });
  }

  
  existemPokemons(): boolean {
    return this.pokemons.results && this.pokemons.results.length > 0;
  }

  

}
