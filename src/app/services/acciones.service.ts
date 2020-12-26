import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Accion } from '../models/acciones';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  constructor(private http: HttpClient, private router: Router) { }

  getAcciones() {
    return this.http.get<GetResponseProducts>(`${base_url}/acciones`)
      .pipe(map((response) => response.acciones));
  }

  createAccion(accion: Accion) {
    return this.http.post(`${base_url}/acciones`, accion);
  }
}


interface GetResponseProducts {
  acciones: Accion[];
}
