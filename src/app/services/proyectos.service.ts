import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyectos';
import { User } from '../models/user.model';



const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient, private router: Router) { }

  getProyectos() {
    return this.http.get<GetResponseProducts>(`${base_url}/proyectos`)
                .pipe(map((response) => response.proyectos))
                .pipe( delay(500))

  }

  getProyectoById(id: string) {
    return this.http.get<any>(`${base_url}/proyectos/${id}`)
      .pipe(map((response) => response.proyecto));
  }

  UpdateProyectoById(id: string, proyecto: Proyecto) {
    return this.http.put<any>(`${base_url}/proyectos/${id}`, proyecto)
      .pipe(map((response) => response.proyecto));
  }


  getProyectosPorUnidad(desde: number = 0, termino:string) {
    return this.http.get<GetResponseProducts>(`${base_url}/buscar/ejecutora/${termino}?desde=${desde}`)
                .pipe(map((response) => response.proyectos))

  }

  createProyecto(proyecto: Proyecto) {
    return this.http.post(`${base_url}/proyectos`, proyecto);
  }

  busquedaPorProyecto(termino:string){
    return this.http.get<GetResponseEquipo>(`${base_url}/buscar/proyecto/${termino}`);
  }
}

interface GetResponseProducts {
  proyectos: Proyecto[];
}
interface GetResponseEquipo {
  clients: User[];
}
