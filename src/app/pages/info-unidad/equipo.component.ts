import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [
  ]
})
export class EquipoComponent implements OnInit {

  equipo:User[]=[];

  constructor( private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectoService.busquedaPorProyecto('direccion').subscribe(
      data => this.equipo = data.clients
    )
  }

}
