import { Component, OnInit } from '@angular/core';
import { Accion } from 'src/app/models/acciones';
import { User } from 'src/app/models/user.model';
import { AccionesService } from 'src/app/services/acciones.service';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styles: [
  ]
})
export class AccionesComponent implements OnInit {


  cargando:boolean;
  public usuario: User;
  acciones: any[] = [];
  public nuevoAccion: Accion = new Accion();

  constructor(private modalInfoService: ModalInfoService,
    private accionesServices: AccionesService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.accionesServices.getAcciones().subscribe(data => {
      this.acciones = data;
      this.usuario = this.userService.usuario;
    })
    this.cargando = false;
  }

  abrirModal() {
    this.modalInfoService.abrirModal2()
  }

  terminado() {
    console.log('terminado');

  }

}

