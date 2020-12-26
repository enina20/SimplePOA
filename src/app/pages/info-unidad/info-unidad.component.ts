import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-info-unidad',
  templateUrl: './info-unidad.component.html'
})
export class InfoUnidadComponent implements OnInit {

  proyectos: Proyecto[] = [];


  constructor(private proyectosServices: ProyectosService) { }

  ngOnInit(): void {

    this.proyectosServices.getProyectos().subscribe(data => {
      this.proyectos = data;
    })
  }
}
