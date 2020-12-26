import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

export class User {

  public name: string;
  public email: string;
  public password: string;
  public cedula: string;
  public celular: string;
  public genero: string;
  public fecha: string;
  public unidad: string;
  public puesto: string;
  public direccion: string;
  public programa: string;
  public proyecto: string;
  public role: string;
  public imagen?: string;
  public uid?: string

  constructor() { }

  get CargarImagen(): string {
    if (this.imagen) {
      return `${base_url}/subir/usuarios/${this.imagen}`
    } else {
      return `${base_url}/subir/usuarios/no-imagen`;
    }
  }

  setDatos(name: string,
    email: string,
    password: string,
    cedula: string,
    celular: string,
    genero: string,
    fecha: string,
    unidad: string,
    puesto: string,
    direccion: string,
    programa: string,
    proyecto: string,
    role: string,
    imagen: string,
    uid?: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.cedula = cedula;
    this.celular = celular;
    this.genero = genero;
    this.fecha = fecha;
    this.unidad = unidad;
    this.puesto = puesto;
    this.direccion = direccion;
    this.programa = programa;
    this.proyecto = proyecto;
    this.role = role;
    this.imagen = imagen;
    this.uid = uid;
  }
}
