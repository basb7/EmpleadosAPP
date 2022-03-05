import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  template: `<app-empleados-form></app-empleados-form>`, //./edit.component.html'
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

}

 /*  empleadoInfo: EmpleadosInterface;
  formEmpleado: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.empleadoInfo = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.empleadoInfo == 'undefined') {
      this.router.navigate(['new']);
    }else {
      this.formEmpleado.patchValue(this.empleadoInfo);
    }
  }

  onSave(): void {
    console.log('Guardado con exito!', this.formEmpleado.value);
  }

  initForm(): void {
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
 */

