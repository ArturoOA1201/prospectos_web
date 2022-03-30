import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectoRoutingModule } from './prospecto-routing.module';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material/material.module';
import { AgainComponent } from './again/again.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    AgainComponent
  ],
  imports: [
    CommonModule,
    ProspectoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProspectoModule { }
