import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoComponent
  },
  {
    path:'informacion',
    component:InformacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionRoutingModule { }
