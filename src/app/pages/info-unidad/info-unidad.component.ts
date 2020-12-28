import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/models/proyectos';
import { Unidades } from 'src/app/models/unidades';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UnidadService } from 'src/app/services/unidad.service';

@Component({
  selector: 'app-info-unidad',
  templateUrl: './info-unidad.component.html'
})
export class InfoUnidadComponent implements OnInit {

  unidad: Unidades;
  termino:string;


  constructor(private unidadService: UnidadService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({ termino }) => this.termino = termino
    )
  }

  cargarUnidad(){
    this.unidadService.busquedaPorUnidad(this.termino).subscribe(
      data => console.log('==> ',data)

    )
  }



}
