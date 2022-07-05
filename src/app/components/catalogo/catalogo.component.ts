import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeAppService } from '../../services/poke-app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {

  arrayResultados = [];

  public nombrePokemon: string = '';

  constructor(
    private servicePokemon: PokeAppService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.catalogo();

  }

  catalogo() {

    this.servicePokemon.catalogo(
      ).subscribe((response: any) => {
        // console.log(response);
        this.arrayResultados = response.results;
      }, err => {
        console.log(err);
      });

  }

  detalles(pokemon) {
    const pokemonNombre = pokemon.name;
    this.router.navigate(['pokemon/', pokemonNombre]);
  }

  buscarXNombre() {

    if (this.nombrePokemon == '') {
      Swal.fire(
        'Incorrecto',
        'Agrega un nombre de pokemón',
        'error'
      )
    } else { 
      this.nombrePokemon = this.nombrePokemon.toLowerCase();
      this.router.navigate(['pokemon/', this.nombrePokemon]);
    }

  }

  siguientesPokemones () {

    let listaInicial = 10;
    let listado = localStorage.getItem('lista');
    let suma = listaInicial + Number(listado);

    localStorage.setItem('lista', JSON.stringify(suma));
    this.catalogo();

  }

}
