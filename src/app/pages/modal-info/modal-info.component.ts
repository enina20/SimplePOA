import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyectos';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {

  public nuevoProyecto: Proyecto = new Proyecto();

  constructor( private router: Router,
    private proyectoService: ProyectosService,
    public modalInfoService: ModalInfoService) { }

  ngOnInit(): void {
  }

  cerrarModal(){

    this.modalInfoService.cerrarModal();
  }

  public crearnuevoProyecto( forma : NgForm){

    if( forma.invalid ){
      Object.values( forma.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    this.proyectoService.createProyecto(this.nuevoProyecto).subscribe( resp => {
      this.cerrarModal();
      this.router.navigateByUrl('');
      Swal.fire('Nuevo Proyecto creado', `Proyecto ${this.nuevoProyecto.name} ha sido creado con exito`, 'success')
    }, (err) => {
      Swal.fire('Error', err.error.message, 'error')
    });
  }
}
