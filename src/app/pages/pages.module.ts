import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { PagesComponent } from './pages.component';
import { Grafica1Component } from './listado/listado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { FormComponent } from './form/form.component';
import { InfoUnidadComponent } from './info-unidad/info-unidad.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ProyectosComponent } from './info-unidad/proyectos.component';
import { EquipoComponent } from './info-unidad/equipo.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ModalAccionComponent } from './modal-accion/modal-accion.component';

import { AccionesComponent } from './info-unidad/acciones.component';
import { PoaGeneralComponent } from './poa-general/poa-general.component';
import { FormUnidadComponent } from './form-unidad/form-unidad.component';
import { ReportesComponent } from './info-unidad/reportes/reportes.component';
import { FormOperacionComponent } from './form-operacion/form-operacion.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent,
    FormComponent,
    InfoUnidadComponent,
    DetalleUsuarioComponent,
    CalendarioComponent,
    ProyectosComponent,
    EquipoComponent,
    ModalInfoComponent,
    BusquedaComponent,
    MensajesComponent,
    ModalAccionComponent,
    AccionesComponent,
    PoaGeneralComponent,
    FormUnidadComponent,
    ReportesComponent,
    FormOperacionComponent,
    DomseguroPipe
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent,
    FormComponent,
    InfoUnidadComponent,
    DetalleUsuarioComponent,
    CalendarioComponent,
    ProyectosComponent,
    EquipoComponent,
    ModalInfoComponent,
    BusquedaComponent,
    MensajesComponent,
    ModalAccionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
