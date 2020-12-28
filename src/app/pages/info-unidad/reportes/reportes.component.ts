import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unidades } from 'src/app/models/unidades';
import { User } from 'src/app/models/user.model';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UnidadService } from 'src/app/services/unidad.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styles: [
  ]
})
export class ReportesComponent implements OnInit {

  cargando:boolean;
  linkPBI:string;
  proyectos:any[]=[];
  usuario: User;
  unidad: Unidades;
  termino: string;

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
            ({unidades}) => this.linkPBI = unidades.link
          )

        }
      )
      this.cargando = false;
    }

}
