import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';

const routes: Routes = [
  {
    path: '', component: CatalogoComponent
  },
  {
    path: 'pokemon/:nombre', component: DetallePokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
