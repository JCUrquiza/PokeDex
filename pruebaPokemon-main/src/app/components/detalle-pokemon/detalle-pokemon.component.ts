import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAppService } from '../../services/poke-app.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})

export class DetallePokemonComponent implements OnInit {

  public pokeNombre = '';
  public pokeImagen = '';
  public descripcion = '';
  public color = '';
  public genero = '';

  public detallesPoke = [];
  public detallesPokeEspecie = [];
  public detallesStats = [];
  public detallesMovimientos = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeServicio: PokeAppService
  ) {
    this.pokeNombre = this.activatedRoute.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
    this.detallePokemon();
    this.detallePokemonEspecie();
  }

  detallePokemon() {
    this.pokeServicio.detallePokemon(this.pokeNombre)
      .subscribe((response: any) => {
        // console.log(response);
        this.detallesPoke = response;
        this.detallesStats = response.stats;
        this.pokeImagen = response.sprites.front_default;
        this.detallesMovimientos = response.moves;
      }, err => {
        console.log(err);
      });
  }

  detallePokemonEspecie() {
    this.pokeServicio.detallePokemonEspecies(this.pokeNombre)
      .subscribe((response: any) => {
        // console.log(response);
        this.detallesPokeEspecie = response;
        this.color = response.color.name;
        for (const des of response.flavor_text_entries) {
          if (des.language.name === 'es') {
            this.descripcion = des.flavor_text;
          }
        }
        for (const gen of response.genera) {
          if (gen.language.name === 'es') {
            this.genero = gen.genus;
          }
        }
      }, err => {
        console.log(err);
      });
  }

}
