import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';

// Servicios
import { HttpClientModule } from '@angular/common/http';
import { PokeAppService } from './services/poke-app.service';

// Componentes
import { HeaderComponent } from './components/header/header.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    DetallePokemonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [
    PokeAppService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
