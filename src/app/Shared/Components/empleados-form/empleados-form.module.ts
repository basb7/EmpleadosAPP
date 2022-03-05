import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadosFormComponent } from './empleados-form.component';



@NgModule({
  declarations: [
    EmpleadosFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EmpleadosFormComponent
  ]
})
export class EmpleadosFormModule { }
