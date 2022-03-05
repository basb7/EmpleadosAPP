import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmpleadosInterface } from '../../Shared/Components/header/models/empleados.interface'
import { map } from 'rxjs/operators'
import { promise } from 'protractor';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleado: Observable<EmpleadosInterface[]>;
  
  private empleadosCollection: AngularFirestoreCollection<EmpleadosInterface>;

  constructor(
    private readonly afs: AngularFirestore
    ) {
      this.empleadosCollection = afs.collection<EmpleadosInterface>('empleados');
      this.onGet();
    }

  onDelete(empId: string): Promise<void>{
    return new Promise(async (resolve, rejects)=>{
      try {
        const result = this.empleadosCollection.doc(empId).delete();
        resolve(result);
      } catch (error) {
        rejects(error.message);
      }
    } )

  }

  onSave(empleado: EmpleadosInterface, empId: string): Promise<void> {
    return new Promise(async (resolve, rejects)=>{
      try {
        const id = empId || this.afs.createId();
        const data = { id, ... empleado };
        const result = await this.empleadosCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        rejects(error.message);
      }
    })
  }

  private onGet(): void {
    this.empleado = this.empleadosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as EmpleadosInterface))
    )
  }

}

