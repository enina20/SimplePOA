import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [
  ]
})
export class ProyectosComponent implements OnInit {

  proyectos:any[]=[];
  usuario: User;
  constructor( private proyectosServices:ProyectosService ,
    private modalInfoService: ModalInfoService,
    private userService: UserService ) {
      this.usuario = userService.usuario
    }

  ngOnInit(): void {
   this.cargarProyectos();
  }

  cargarProyectos(){
    this.proyectosServices.getProyectos().subscribe(data => {
      this.proyectos = data;
    })
  }
  abrirModal(){
    this.modalInfoService.abrirModal()
  }

}
