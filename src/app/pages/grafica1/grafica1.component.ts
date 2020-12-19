import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  clientes:any[]=[];


  constructor(private clienteService: ClientsService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.clients;
  }

  delete(){

  }

}
