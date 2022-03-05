import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { EmpleadosInterface } from '../../../Shared/Components/header/models/empleados.interface';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  valueEmpleado: EmpleadosInterface = null;

  navigationExtras: NavigationExtras = {
    state:{
      empleado: null
    }
  }
  
  constructor(
    private router: Router,
    private empleadosSvc: EmpleadosService,
  ) { 
    const navegation = this.router.getCurrentNavigation();
    this.valueEmpleado = navegation?.extras?.state?.value;

  }

  ngOnInit(): void {
    if (typeof this.valueEmpleado === 'undefined') {
      this.router.navigate(['list']);
    }
  }

  goList(): void {
    this.router.navigate(['list'])
  }

  onEdit(): void {
    this.navigationExtras.state.value = this.valueEmpleado;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async onDelete(): Promise<void> {
    
    let valueConfirm = confirm('¿Desea eliminar la informacion del empleado?');
     if(valueConfirm == true) {
       try {
         await this.empleadosSvc.onDelete(this.valueEmpleado?.id);
       } catch (error) {
         console.log(error.message);
       }
      alert('Se eliminado correctamente la informacion');
      this.router.navigate(['list']);
     }else {
       return;
     }

  }

}
