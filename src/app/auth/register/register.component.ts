import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent {

  formSubmitted: boolean = false;

  public registerForm = this.fb.group({
    name: ['test', [Validators.required]],
    email: ['test@test', [Validators.required, Validators.email]],
    password: ['123', [Validators.required]],
    password2: ['123', [Validators.required]],
    terminos: [true, [Validators.required]]
  }, {
    validators: this.passwordIguales('password', 'password2')
  });

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  createUser() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    }

    //Realizamos el posteo
    this.userService.createUser(this.registerForm.value)
      .subscribe(resp => {
        this.router.navigateByUrl('/')
      }, (err) => {
        Swal.fire('Error', err.error.message, 'error')
      });
  }

  campoNoValido(campo: string): boolean {
    return this.registerForm.get(campo).invalid && this.formSubmitted ? true : false;

  }

  passwordNoValido() {

    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    return pass1 !== pass2 && this.formSubmitted ? true : false;

  }

  aceptarTerminos() {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }

  passwordIguales(pass1: string, pass2: string) {

    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    }
  }
}
