import { Routes } from '@angular/router';
import { AccionesComponent } from './acciones.component';


import { EquipoComponent } from './equipo.component';
import { ProyectosComponent } from './proyectos.component';



export const info_routes: Routes = [
  { path: 'informacion', component: ProyectosComponent,
  data: { title: 'Informacion general'}},
  { path: 'equipo', component: EquipoComponent,
  data: { title: 'Equipo'}},
  { path: 'acciones', component: AccionesComponent,
  data: { title: 'Actividades'}},
  { path: '**', pathMatch: 'full', redirectTo: 'informacion'},

]
