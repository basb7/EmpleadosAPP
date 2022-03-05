import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new.component';
import { EmpleadosFormModule } from 'src/app/Shared/Components/empleados-form/empleados-form.module';


const routes: Routes = [
  { path: '', component: NewComponent }
];

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EmpleadosFormModule
  ]
})
export class NewModule { }
