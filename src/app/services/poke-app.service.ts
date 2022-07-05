import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokeAppService {

  
  constructor( private http: HttpClient ) {
  }


  catalogo() {

    let listado = localStorage.getItem('lista');

    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${ listado }&limit=10`);
    
  }

  detallePokemon(poke) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${ poke }`);
  }

  detallePokemonEspecies(poke) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${ poke }/`);
  }

}
