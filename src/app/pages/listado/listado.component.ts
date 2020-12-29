import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grafica1',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  usuario: User;
  clientes: User[] = [];
  clientesTemp: User[] = [];
  totalUsuarios: Number = 0;
  cargando: boolean = true;
  desde: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.usuario = this.userService.usuario;
  }


  getUsuarios() {
    this.cargando = true;
    this.userService.getUsers(this.desde)
      .subscribe(({ total, usuarios }) => {
        this.totalUsuarios = total;
        this.clientes = usuarios;
        this.clientesTemp = usuarios;
        this.cargando = false;
      });
  }

  buscarUsuario(termino: string) {
    if (termino.length === 0) {
      return this.clientes = this.clientesTemp
    }
    this.userService.busqueda(termino).subscribe(
      data => {
        this.clientes = data.clients
      }
    )
  }

  deleteUsuario(usuario: User) {

    if (usuario.uid === this.userService.usuario.uid) {
      return Swal.fire('Operacion no valida',
        `No es posible borrar su usuario`,
        'info')
    }
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })


    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Seguro que desea eliminar al usuario ${usuario.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.deleteUser(usuario.uid).subscribe(data => {

          this.getUsuarios();

          swalWithBootstrapButtons.fire(
            'Eliminado!',
            `El usuario ${usuario.name} ha sido eliminado`,
            'success'
          )

        });
      }
    })
  }

  cambiarPagina(valor: number) {
    this.desde += valor;
    if (this.desde < 0) {
      this.desde = 0
    } else if (this.desde >= this.totalUsuarios) {
      this.desde -= valor;
    }
    this.getUsuarios();
  }

}
