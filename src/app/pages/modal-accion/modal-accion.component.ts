import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Accion } from 'src/app/models/acciones';
import { AccionesService } from 'src/app/services/acciones.service';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-accion',
  templateUrl: './modal-accion.component.html',
  styles: [
  ]
})
export class ModalAccionComponent implements OnInit {

  public nuevoAccion: Accion = new Accion();

  constructor( private router: Router,
    private accionService: AccionesService,
    public modalInfoService: ModalInfoService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalInfoService.cerrarModal2();
  }


  public crearnuevoAccion( forma: NgForm){

    if( forma.invalid ){
      Object.values( forma.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    this.accionService.createAccion(this.nuevoAccion).subscribe( resp => {
      this.cerrarModal();
      this.router.navigateByUrl('');
      Swal.fire('Nueva accion creada', `Accion de ${this.nuevoAccion.detalle} ha sido creado con exito`, 'success')
    }, (err) => {
      Swal.fire('Error', err.error.message, 'error')
    });
  }
}
