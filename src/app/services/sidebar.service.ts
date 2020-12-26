import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Unidades } from '../models/unidades';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class SidebarService {

  public programas:any[]=[];

 cargarMenu(){
   this.programas = JSON.parse( localStorage.getItem('menu'));
 }
}
