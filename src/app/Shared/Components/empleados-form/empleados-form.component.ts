import { Component, OnInit } from '@angular/core';
import { EmpleadosInterface } from '../../../Shared/Components/header/models/empleados.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../../Pages/empleados/empleados.service'

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent implements OnInit {

  empleadoInfo: EmpleadosInterface;
  formEmpleado: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private empleadoSvc: EmpleadosService,
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.empleadoInfo = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.empleadoInfo === 'undefined') {
      this.router.navigate(['new']);
    }else {
      this.formEmpleado.patchValue(this.empleadoInfo);
    }
  }

  onSave(): void {
    console.log('Guardado con exito!', this.formEmpleado.value);
    if(this.formEmpleado.valid) {
      const empleado = this.formEmpleado.value;
      const empleadoId = this.empleadoInfo?.id || null;
      this.empleadoSvc.onSave(empleado, empleadoId);
      alert('Informacion guardada con exito!');
      this.formEmpleado.reset();
    }
  }

  private initForm(): void {
    this.formEmpleado = this.formBuilder.group({
      name: ['', Validators.required],
      cc: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adress: ['', Validators.required],
      date: ['', Validators.required],
      ce: ['', Validators.required],
      pay: ['', Validators.required]
    })
  }

  goList(): void {
    this.router.navigate(['list'])
  }

  isValidForm(field: string): string {
    const validForm = this.formEmpleado.get(field);
    return (!validForm.valid && validForm.touched) ? 'is-invalid': validForm.touched ? 'is-valid': '';
  }

}
