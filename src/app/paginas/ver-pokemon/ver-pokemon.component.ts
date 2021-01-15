import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VerPoke } from '../../interfaces/verPoke';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.css']
})
export class VerPokemonComponent {
  public verPoke: VerPoke = <VerPoke>{};
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      console.log(this.activatedRoute.snapshot.params.name);
      this.getPokemon(this.activatedRoute.snapshot.params.name);
    }

    getPokemon(name: string) {
      this.pokemonService.getPokemon(name)
        .subscribe((verPoke: VerPoke) => {
          this.verPoke = verPoke;
        }, () => { this.errorMsgComponent.setError('Falha ao buscar pokemon.'); });
    }


}
