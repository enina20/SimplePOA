import { Component, OnInit } from '@angular/core';
import { Unidades } from 'src/app/models/unidades';
import { SidebarService, Unida } from 'src/app/services/sidebar.service';
import { UnidadService } from 'src/app/services/unidad.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public imagen = '';
  public usuario;
  menuItems:Unida[] = [];
  subprograma:Unidades[] = [];

  constructor( private sidebarService: SidebarService,
               private userService: UserService,
               private unidadService: UnidadService) {

    this.menuItems = this.sidebarService.programas;
    this.imagen = userService.usuario.CargarImagen;
    this.usuario = userService.usuario;
  }

  ngOnInit(): void {
    this.unidadService.getUnidades().subscribe( ({unidades}) => {
      this.subprograma = unidades});
  }
}
