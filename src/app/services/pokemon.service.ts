import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getListaPokemons(): Observable<Pokemon[]> {
    const url = `${environment.pokemonApiUrl}/pokemon/?offset=20&limit=2000`;
    console.log(url);
    return this.http.get<Pokemon[]>(url);
  }

  getPokemon(name: string): Observable<Pokemon> {
    const url = `${environment.pokemonApiUrl}/pokemon/${name}/`;
    return this.http.get<Pokemon>(url);
  }

}
