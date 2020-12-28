import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Unidades } from '../models/unidades';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  constructor(private http: HttpClient, private router: Router) { }

  getUnidades() {
    return this.http.get<{unidades: Unidades[], total: Number}>(`${base_url}/unidades`);

  }

  createUnidad(unidad: Unidades) {
    return this.http.post(`${base_url}/unidades`, unidad);
  }

  busquedaPorUnidad(termino:string){
    return this.http.get<{unidades:Unidades}>(`${base_url}/buscar/unidad/${termino}`)
    .pipe(delay(500));

  }
}


interface GetResponseUnidades {
  unidades: Unidades[];
}

interface GetResponseUnidad{
  unidades: Unidades;
}


