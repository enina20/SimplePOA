import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  public resultados: any[] = [];
  cargando: boolean;


  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      ({ termino }) => this.busqueda(termino)
    )
  }

  busqueda(termino: string) {
    this.cargando = true;
    this.userService.busquedaGlobal(termino).subscribe(
      data => {
        this.resultados = data.clients
        this.cargando = false;
      }
    )
  }
}
