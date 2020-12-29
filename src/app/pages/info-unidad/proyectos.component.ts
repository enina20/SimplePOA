import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unidades } from 'src/app/models/unidades';
import { User } from 'src/app/models/user.model';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UnidadService } from 'src/app/services/unidad.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [
  ]
})
export class ProyectosComponent implements OnInit {

  cargando:boolean;
  proyectos:any[]=[];
  proyectosTemp:any[]=[];
  usuario: User;
  unidad: Unidades;
  termino: string;
  totalUsuarios: Number = 0;
  desde: number = 0;

  constructor( private proyectosServices:ProyectosService ,
    private modalInfoService: ModalInfoService,
    private activatedRoute:ActivatedRoute,
    private unidadService: UnidadService,
    private userService: UserService ) {
      this.usuario = userService.usuario
    }

  ngOnInit(): void {
    this.cargando = true;
    this.activatedRoute.parent.params.subscribe(
      ({ termino }) => {
        this.termino = termino;

        this.unidadService.busquedaPorUnidad(this.termino).subscribe(
          ({unidades}) => this.unidad = unidades
        )

        this.proyectosServices.getProyectosPorUnidad( this.desde, this.termino ).subscribe(
          data => {
            this.proyectos = data,
            this.proyectosTemp = data
          }
        )
      }
    )
    this.cargando = false;
  }

  getUsuarios(){
  }

  abrirModal( id: string ){
    this.modalInfoService.abrirModal()
  }

  cambiarPagina(valor: number) {
    this.desde += valor;
    if (this.desde < 0) {
      this.desde = 0
    } else if (this.desde >= this.totalUsuarios) {
      this.desde -= valor;
    }
    this.proyectosServices.getProyectosPorUnidad( this.desde, this.termino ).subscribe(
      data => this.proyectos = data
    )
  }
}
