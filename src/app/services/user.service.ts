import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';
import { catchError, delay, map, tap } from 'rxjs/operators'
import { from, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model'


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usuario: User;

  constructor(private http: HttpClient, private router: Router) { }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('menu');
    this.router.navigateByUrl('/login');
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/validar`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      map((resp: any) => {
        this.cargarUsuario(resp.client)
        localStorage.setItem('token', resp.token);
        // localStorage.setItem('menu', resp.sidebar);

        return true;
      }),
      catchError(error => of(false))
    );
  }

  cargarUsuario(usuario: User) {

    this.usuario = new User();

    const { name, email, password, cedula, celular, genero, fecha, unidad,
      puesto, direccion, programa, proyecto, role, imagen, uid }
      = usuario;

    this.usuario.setDatos(name, email, password, cedula, celular, genero, fecha, unidad,
      puesto, direccion, programa, proyecto, role, imagen, uid);

  }



  createUser(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }

  createUsuario(usuario: User) {
    return this.http.post(`${base_url}/usuarios`, usuario)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }

  getUsers(desde: number = 0) {
    return this.http.get<{ total: Number, usuarios: User[] }>(`${base_url}/usuarios?desde=${desde}`)
      .pipe(delay(500))
  }

  getUserById(id: string) {
    return this.http.get<any>(`${base_url}/usuarios/${id}`)
      .pipe(map((response) => response.usuario));
  }

  UpdateUserById(id: string, usuario: User) {
    return this.http.put<any>(`${base_url}/usuarios/${id}`, usuario)
      .pipe(map((response) => response.usuario));
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${base_url}/usuarios/${id}`);
  }

  loginUser(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('menu', JSON.stringify(resp.sidebar));

        })
      );
  }

  busqueda(termino: string) {
    return this.http.get<GetResponseProducts>(`${base_url}/buscar/${termino}`);
  }

  busquedaGlobal(termino: string) {
    return this.http.get<GetResponseSearch>(`${base_url}/buscar/${termino}`);
  }
}


interface GetResponseProducts {
  clients: User[];
}

interface GetResponseSearch {
  clients: any[];
}

