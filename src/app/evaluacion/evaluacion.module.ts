import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionRoutingModule } from './evaluacion-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    EvaluacionRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EvaluacionModule { }
