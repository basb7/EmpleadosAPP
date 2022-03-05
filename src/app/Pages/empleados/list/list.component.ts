import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { EmpleadosService } from '../empleados.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  empleados$ = this.empleadosSvc.empleado;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }



  constructor(
    private router: Router,
    private empleadosSvc: EmpleadosService,
  ) { }

  ngOnInit(): void {
  }

  onGet(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  } 

  onEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async onDelete(empId: string): Promise<void> {
    let value = confirm('¿Desea eliminar la informacion del empleado?')
   if(value == true) {
      try {
            await this.empleadosSvc.onDelete(empId); 
          } catch (error) {
            console.log('error al eliminar', error.message)
          }
     alert('La informacion se ha eliminado con exito');
    }else{
      return
    }

    
    
   
  }
}
