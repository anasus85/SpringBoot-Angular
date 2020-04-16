import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Direccion} from "../model/direccion"
import {Observable} from "rxjs/index";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
 
 
  constructor(private http: HttpClient) {  
   }

   baseUrl: string = 'http://localhost:3004/api/direcciones';
   listarUrl: string = "http://localhost:3004/api/direcciones/listar"
  


  getDirecciones() {
    return this.http.get<any>(this.listarUrl)
    
  }

 
  getDireccionById(idDireccion) {
    const _id= idDireccion;
    const url = `${this.baseUrl}/${_id}`
    return this.http.get<any>(url);

  }

  crearDireccion(direccion: Direccion) {
    return this.http.post<any>(this.baseUrl, direccion);
  }
  
 
  
  modificarDireccion(direccion, idDireccion){
    const _id= idDireccion;
    const url = `${this.baseUrl}/${_id}`
    return this.http.put<any>(url, direccion);
  }
  


  

  borrarDireccion(direccion) {
    const _id= direccion.idDireccion;
    const url = `${this.baseUrl}/${_id}`
    return this.http.delete<any>(url);

  }

 
}
