import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [
  ]
})
export class EquipoComponent implements OnInit {

  equipo:User[]=[];
  cargando:boolean;
  termino: string;

  constructor( private proyectoService: ProyectosService,
    private activatedRoute:ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.activatedRoute.parent.params.subscribe(
      ({ termino }) => {
        this.termino = termino;

        this.userService.getUsuariosPorProyecto(this.termino).subscribe(
          data => {this.equipo = data
          console.log('equipo ==> ', this.equipo);
          }
        )
      }
    )
    this.cargando = false;
  }
}
