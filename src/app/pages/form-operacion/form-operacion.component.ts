import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyectos';
import { ModalInfoService } from 'src/app/services/modal-info.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-operacion',
  templateUrl: './form-operacion.component.html',
  styles: [
  ]
})
export class FormOperacionComponent implements OnInit {

  public nuevoProyecto: Proyecto = new Proyecto();

  constructor( private router: Router,
    private activatedRoute: ActivatedRoute,
    private proyectoService: ProyectosService,
    public modalInfoService: ModalInfoService) {
      this.cargarOperacion()}

  ngOnInit(): void {
  }

  public cargarOperacion(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.proyectoService.getProyectoById(id).subscribe(data => this.nuevoProyecto = data);
      }
    });
  }

  cerrarModal(){
    this.modalInfoService.cerrarModal();
  }

  public crearnuevoProyecto( forma : NgForm){

    if( forma.invalid ){
      this.cerrarModal();
      Swal.fire('Formulario no valido', `Debe de llenar todos los campos del formulario de forma correcta`, 'error')
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

  public actualizarOperacion(id: string) {
    this.proyectoService.UpdateProyectoById(id, this.nuevoProyecto).subscribe(data => {
      this.router.navigateByUrl('dashboard/listado')
      Swal.fire('Operacion actualizada', `La operacion ha sido actualizada con exito`, 'success')
    }, (err) => {
      Swal.fire('Error', err.error.message, 'error')
    }
    );
  }

}
