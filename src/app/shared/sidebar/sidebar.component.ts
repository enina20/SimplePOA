import { Component, OnInit } from '@angular/core';
import { Unidades } from 'src/app/models/unidades';
import { SidebarService } from 'src/app/services/sidebar.service';
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
  menuItems:any[] = [];

  constructor( private sidebarService: SidebarService, private userService: UserService) {

    this.sidebarService.cargarMenu();
      this.menuItems = sidebarService.programas;
      this.imagen = userService.usuario.CargarImagen;
      this.usuario = userService.usuario;
  }

  ngOnInit(): void {
  }

}
