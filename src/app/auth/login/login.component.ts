import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

declare const gapi;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  formSubmitted: boolean = false;
  public auth2: any;

  public loginForm = this.fb.group({
    email: ['admi@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
  });

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }
  ngOnInit(): void {
  }

  login() {

    this.userService.loginUser(this.loginForm.value)
      .subscribe(resp => {
        console.log('login');
        this.router.navigateByUrl('/');

      }, (err) => {
        Swal.fire('Error', err.error.message, 'error')
      });

  }
}
