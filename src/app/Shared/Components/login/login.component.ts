import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
  ) { this.initForm()  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  login(): void {
   if (this.loginForm.valid) {
    if (this.loginForm.value.email == 'Admin' && this.loginForm.value.password == 123) {
      this.loginForm.reset();
      this.router.navigate(['list']);
    }
   }else{
     alert('Datos incorrectos, intente nuevamente')
   }
  }

}
