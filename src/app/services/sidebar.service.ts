import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Unidades } from '../models/unidades';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class SidebarService {

  public programas:Unida[]=[
    { name: 'Administrativos Centrales',
      icono: "https://img.icons8.com/color/48/000000/meeting-room.png", },
    { name: "Direcciones",
      icono: "https://img.icons8.com/color/48/000000/sales-channels.png", },
    { name: "Secretarias",
      icono: "https://img.icons8.com/color/48/000000/teamwork--v2.png", },
    { name: "POA General",
      icono: "https://img.icons8.com/color/48/000000/rules.png", },
    { name: "Personal y usuarios",
      icono: "https://img.icons8.com/color/50/000000/registration-skin-type-7.png", },
  ];

//  cargarMenu(){
//    this.programas = JSON.parse( localStorage.getItem('menu'));
//  }
}

export interface Unida {
  name:string,
  icono:string;
}
