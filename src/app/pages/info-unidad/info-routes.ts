import { Routes } from '@angular/router';
import { FormOperacionComponent } from '../form-operacion/form-operacion.component';
import { FormUnidadComponent } from '../form-unidad/form-unidad.component';
import { AccionesComponent } from './acciones.component';


import { EquipoComponent } from './equipo.component';
import { ProyectosComponent } from './proyectos.component';
import { ReportesComponent } from './reportes/reportes.component';



export const info_routes: Routes = [
  { path: 'informacion', component: ProyectosComponent,
  data: { title: 'Informacion general'}},
  { path: 'informacion/form', component: FormOperacionComponent,
  data: { title: 'Crear una nueva operacion'}},
  { path: 'informacion/form/:id', component: FormOperacionComponent,
  data: { title: 'Editar la operacion'}},
  { path: 'reporte', component: ReportesComponent,
  data: { title: 'Informacion general'}},
  { path: 'equipo', component: EquipoComponent,
  data: { title: 'Equipo'}},
  { path: 'acciones', component: AccionesComponent,
  data: { title: 'Actividades'}},
  { path: '**', pathMatch: 'full', redirectTo: 'informacion'},

]
