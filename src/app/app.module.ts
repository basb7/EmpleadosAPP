import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormControl} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { EmpleadosFormModule } from './Shared/Components/empleados-form/empleados-form.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './Shared/Components/login/login.component';

const routesApp: Routes = [
  {path: 'home', component: HeaderComponent},
  { path: 'list', loadChildren: () => import('./Pages/empleados/list/list.module').then(m => m.ListModule) },
  { path: 'new', loadChildren: () => import('./Pages/empleados/new/new.module').then(m => m.NewModule) },
  { path: 'details', loadChildren: () => import('./Pages/empleados/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./Pages/empleados/edit/edit.module').then(m => m.EditModule) },
  { path: '', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    EmpleadosFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
