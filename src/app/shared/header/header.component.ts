import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accion } from 'src/app/models/acciones';
import { User } from 'src/app/models/user.model';
import { AccionesService } from 'src/app/services/acciones.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  public imagen = '';
  public usuario;
  public acciones: Accion[] = [];


  constructor(
    private accionesServices: AccionesService,
    private userService: UserService, private router: Router) {
    this.usuario = userService.usuario;
    this.imagen = userService.usuario.CargarImagen;
  }

  ngOnInit(): void {
    this.accionesServices.getAcciones().subscribe(
      data => this.acciones = data.acciones
    );
  }

  logOut() {
    this.userService.logOut();
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      return;
    }
    this.router.navigateByUrl(`/dashboard/buscar/${termino}`);

  }

}
