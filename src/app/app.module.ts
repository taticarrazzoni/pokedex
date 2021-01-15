import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListarPokemonComponent } from './paginas/listar-pokemon/listar-pokemon.component';
import { VerPokemonComponent } from './paginas/ver-pokemon/ver-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListarPokemonComponent,
    VerPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
