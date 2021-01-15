import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPokemonComponent } from './paginas/listar-pokemon/listar-pokemon.component';
import { VerPokemonComponent } from './paginas/ver-pokemon/ver-pokemon.component';

const routes: Routes = [
  { path: '', component: ListarPokemonComponent},
  { path: 'pokemon/:name', component: VerPokemonComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
