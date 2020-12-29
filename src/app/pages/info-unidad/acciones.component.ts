import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accion } from 'src/app/models/acciones';
import { User } from 'src/app/models/user.model';
import { AccionesService } from 'src/app/services/acciones.service';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styles: [
  ]
})
export class AccionesComponent implements OnInit {



  public cargando:boolean;
  public usuario: User;
  public acciones: any[] = [];
  public termino: string;
  public nuevoAccion: Accion = new Accion();

  public noConcluidas: any[] = [];
  public concluidas: any[] = [];
  public enProceso: any[] = [];

  constructor(private modalInfoService: ModalInfoService,
    private accionesServices: AccionesService,
    private activatedRoute:ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.activatedRoute.parent.params.subscribe(
      ({ termino }) => {
        this.termino = termino;
        console.log('termino', this.termino);

        this.accionesServices.getAccionesPorUnidad( this.termino ).subscribe(
          data => {
            this.acciones = data
            this.noConcluidas = this.acciones.filter( acc => acc.estado === 'No concluidas');
            this.concluidas = this.acciones.filter( acc => acc.estado === 'Concluidas');
            this.enProceso = this.acciones.filter( acc => acc.estado === 'En Proceso');
          }
        )
      }
    )
    this.cargando = false;
  }

  abrirModal() {
    this.modalInfoService.abrirModal2()
  }




  cambiarEstado(dato: string, estado: string) {
    console.log(dato);

    let acc: Accion = new Accion;
    acc.estado = estado;
    this.accionesServices.UpdateAccion(dato, acc).subscribe(
      data => console.log(data)

    );

  }



}

