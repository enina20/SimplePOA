import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Administrativos Centrales',
      icon: '',
      submenu: [
        {title: 'Administraci\'on Consejo Municipal', url: 'progress' },
        {title: 'Administraci\'on Despacho Alcalde Municipal', url: 'progress' },
        {title: 'Direcci\'on del Gabinete', url: 'progress' },
        {title: 'Auditor\'ia Interna', url: 'progress' },
      ]
    },
    {
      title: 'Direcciones',
      icon: '',
      submenu: [
        {title: 'Direccion general de asuntos juridicos', url: 'progress' },
        {title: 'Direccion de transparencia y lucha contra la corrupcion', url: 'progress' },
        {title: 'Direcci\'ion de coordinacion de politicas de Igualdad', url: 'progress' },
        {title: 'Direccion de comunicaion Social', url: 'progress' },
      ]
    },
    {
      title: 'Secretarias',
      icon: '',
      submenu: [
        {title: 'Secretaria de educacion y cultura ciudadana', url: 'progress' },
        {title: 'Secretaria de desarrollo social', url: 'progress' },
        {title: 'secretaria de salud y deportes', url: 'progress' },
        {title: 'secretaria de infraestructura publica', url: 'progress' },
      ]
    },
    {
      title: 'Usuarios',
      icon: '',
      submenu: [
        {title: 'Listado', url: 'grafica1' },
      ]
    },
    {
      title: 'Unidades ejecutoras',
      icon: '',
      submenu: [
        {title: 'Listado', url: 'grafica1' },
      ]
    },
    {
      title: 'POA General',
      icon: '',
      submenu: [
        {title: 'POA 2020', url: 'grafica1' },
      ]
    },
    {
      title: 'Acciones del mes',
      icon: '',
      submenu: [
        {title: 'Plan mensual', url: 'grafica1' },
      ]
    }
  ];

  constructor() { }
}
