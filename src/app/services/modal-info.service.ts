import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalInfoService {

  private _ocultarModal:boolean = true;

  get ocutarModal(){
    return this._ocultarModal;
  }

  abrirModal(){
    this._ocultarModal = false;
  }

  cerrarModal(){
    this._ocultarModal = true;
  }

  private _ocultarModal2:boolean = true;

  get ocutarModal2(){
    return this._ocultarModal2;
  }

  abrirModal2(){
    this._ocultarModal2 = false;
  }

  cerrarModal2(){
    this._ocultarModal2 = true;
  }

  constructor() { }
}
