import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Unidades } from 'src/app/models/unidades';
import { UnidadService } from 'src/app/services/unidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-unidad',
  templateUrl: './form-unidad.component.html',
  styles: [
  ]
})
export class FormUnidadComponent implements OnInit {

  public unidadNueva: Unidades = new Unidades();

  constructor(private unidadService: UnidadService, private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }



  public crearUnidad(forma: NgForm) {

    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    console.log('Clicked');
    console.log(this.unidadNueva);

    this.unidadService.createUnidad(this.unidadNueva).subscribe(resp => {
      this.router.navigateByUrl('dashboard')
      Swal.fire('Nueva unidad ejecutoria creada', `La unidad ${this.unidadNueva.unidad} ha sido creado con exito`, 'success')
    }, (err) => {
      Swal.fire('Error', err.error.message, 'error')
    });
  }

}
