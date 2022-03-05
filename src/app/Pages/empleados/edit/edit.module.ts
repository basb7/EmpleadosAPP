import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadosFormModule } from 'src/app/Shared/Components/empleados-form/empleados-form.module';


const routes: Routes = [
  { path: '', component: EditComponent }
];

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EmpleadosFormModule
  ]
})
export class EditModule { }
