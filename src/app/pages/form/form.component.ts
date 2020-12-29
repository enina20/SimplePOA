import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Unidades } from 'src/app/models/unidades';
import { User } from 'src/app/models/user.model';
import { UnidadService } from 'src/app/services/unidad.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  public usuario: User = new User();
  public subprograma:Unidades[]= [];

  constructor(private userService: UserService, private router: Router,
    private unidadService: UnidadService,
    private activatedRoute: ActivatedRoute) {
    this.cargarUsuario();
  }

  ngOnInit(): void {
    this.unidadService.getUnidades().subscribe( ({unidades}) => {
      this.subprograma = unidades});
  }

  public cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.userService.getUserById(id).subscribe(data => this.usuario = data);
      }
    });
  }

  public actualizarUsuario(id: string) {
    this.userService.UpdateUserById(id, this.usuario).subscribe(data => {
      this.router.navigateByUrl('dashboard/listado')
      Swal.fire('Usuario actualizado', `Usuario ${this.usuario.name} ha sido actualizado con exito`, 'success')
    }, (err) => {
      Swal.fire('Error', err.error.message, 'error')
    }
    );
  }

  public crearUsuario(forma: NgForm) {

    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    console.log('Clicked');
    this.usuario.password = "bienvenido123";
    console.log(this.usuario);

    this.userService.createUsuario(this.usuario).subscribe(resp => {
      this.router.navigateByUrl('dashboard/listado')
      Swal.fire('Nuevo usuario creado', `Usuario ${this.usuario.name} ha sido creado con exito`, 'success')
    }, (err) => {
      Swal.fire('Error', err.error.message, 'error')
    });
  }

}
