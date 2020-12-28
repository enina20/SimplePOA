import { Component, OnInit } from '@angular/core';
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

  proyectos:any[]=[];
  unidades:Number;
  usuarios:Number;

  cargando:Boolean;

  constructor( private proyectoService: ProyectosService,
               private unidadService: UnidadService,
               private userService: UserService) { }

  ngOnInit(): void {

    this.cargando = true;

    this.proyectoService.getProyectos().subscribe(
      data => this.proyectos = data
    );

    this.unidadService.getUnidades().subscribe(({total}) => {
        this.unidades = total
      }
    );

    this.userService.getUsers().subscribe(({total}) => {
      this.usuarios = total
    });

    this.cargando = false;
  }
}
