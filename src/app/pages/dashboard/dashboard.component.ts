import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  proyectos:any[]=[];

  constructor( private proyectoService: ProyectosService) { }

  ngOnInit(): void {

    this.proyectoService.getProyectos().subscribe(
      data => this.proyectos = data
    )
  }
}
