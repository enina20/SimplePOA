import { Component, OnInit } from '@angular/core';
import { Accion } from 'src/app/models/acciones';
import { Proyecto } from 'src/app/models/proyectos';
import { AccionesService } from 'src/app/services/acciones.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UnidadService } from 'src/app/services/unidad.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  proyectos:Proyecto[] = [];

  unidades:Number;
  usuarios:Number;
  acciones:Number;

  cargando:Boolean;

  constructor( private proyectoService: ProyectosService,
               private accionesService: AccionesService,
               private unidadService: UnidadService,
               private userService: UserService) { }

  ngOnInit(): void {

    this.cargando = true;

    this.proyectoService.getProyectos().subscribe(
      data => {
        this.proyectos = data
      }
    );

    this.accionesService.getAcciones().subscribe(
      ({total}) => { this.acciones = total
      console.log('acciones ==> ',this.acciones);
      }
    );

    this.cargarPresupuesto();

    this.unidadService.getUnidades().subscribe(({total}) => {
        this.unidades = total
      }
    );

    this.userService.getUsers().subscribe(({total}) => {
      this.usuarios = total
    });

    this.cargando = false;
  }

  cargarPresupuesto(){
    for (let index = 0; index < this.proyectos.length; index++) {
      this.presupuesto = this.presupuesto + Number(this.proyectos[index].presupuesto)
      console.log(this.presupuesto);
    }
  }
}
