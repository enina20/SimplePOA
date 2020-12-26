import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Grafica1Component } from './listado/listado.component';
import { FormComponent } from './form/form.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { InfoUnidadComponent } from './info-unidad/info-unidad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { info_routes } from './info-unidad/info-routes';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { PoaGeneralComponent } from './poa-general/poa-general.component';


import { AdmiGuard } from '../guards/admi.guard';

const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Principal' } },
  {
    path: 'unidad/:termino',
    component: InfoUnidadComponent,
    data: { title: 'Informacion de la Unidad Ejecutora' },
    children: info_routes
  },
  { path: 'calendario', component: CalendarioComponent, data: { title: 'Informacion de la Unidad Ejecutora' } },
  { path: 'poa-general', component: PoaGeneralComponent, data: { title: 'Informacion sobre el Poa General' } },
  { path: 'mensajes', component: MensajesComponent, data: { title: 'Mis mensajes' } },
  { path: 'buscar/:termino', component: BusquedaComponent, data: { title: 'Busqueda en la aplicacion' } },
  { path: 'listado', component: Grafica1Component, data: { title: 'Listado de usuarios' } },
  { path: 'listado/form', canActivate: [AdmiGuard], component: FormComponent, data: { title: 'Crear Usuario' } },
  { path: 'listado/form/:id', canActivate: [AdmiGuard], component: FormComponent, data: { title: 'Editar Usuario' } },
  { path: 'listado/detalle/:id', component: DetalleUsuarioComponent, data: { title: 'Editar Usuario' } },
  { path: 'perfil', component: DetalleUsuarioComponent, data: { title: 'Mi perfil' } },
  { path: 'perfil/:id', component: DetalleUsuarioComponent, data: { title: 'Mi perfil' } },
  { path: 'account-setting', component: AccountSettingComponent, data: { title: 'ajuste de la cuenta' } },

];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesRoutingModule { }
