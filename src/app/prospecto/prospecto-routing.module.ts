import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgainComponent } from './again/again.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'',
    component:FormComponent
  },
  {
    path:'form',
    component:AgainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectoRoutingModule { }
