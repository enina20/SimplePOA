import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { SubirArchivosService } from 'src/app/services/subir-archivos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  public usuario;
  public imagen = '';
  public imagenSubir: File;
  public imgTemp: any = '';
  public cargar: Boolean;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private subirService: SubirArchivosService) {
    this.usuario = this.userService.usuario;
    this.imagen = this.userService.usuario.CargarImagen;
  }

  ngOnInit(): void {
    this.cargar = true,
    this.cargar = false
  }

  cambiarImagen(file: File) {
    this.imagenSubir = file;
    if (!file) {
      return this.imgTemp = null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTemp = reader.result;

    }
  }

  subirImagen() {
    this.subirService.actualizarFoto(this.imagenSubir, 'usuarios', this.usuario.uid)
      .then(img => this.usuario.imagen = img);

  }

}
