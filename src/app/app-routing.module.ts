import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./evaluacion/evaluacion.module').then(m => m.EvaluacionModule) 
  },
  {
    path:'prospectos',
    loadChildren:() => import('./prospecto/prospecto.module').then(m => m.ProspectoModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
