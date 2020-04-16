import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormatoEtiqueta} from "../model/formato-etiqueta"
import {Observable} from "rxjs/index"

@Injectable({
  providedIn: 'root'
})
export class FormatosEtiquetaService {
  formatosEtiqueta= [
    {idFormato:1, nombreFormato: "formato1", codCliente: true, codClienteExtendido: false, codBarras: true, ean: true, direccion1: true, direccion2: false},
    {idFormato:2, nombreFormato: "formato2", codCliente: true, codClienteExtendido: true, codBarras: true, ean: true, direccion1: true, direccion2: false},
    {idFormato:3, nombreFormato: "formato3", codCliente: true, codClienteExtendido: false, codBarras: true, ean: true, direccion1: true, direccion2: true},
    {idFormato:4, nombreFormato: "formato4", codCliente: true, codClienteExtendido: false, codBarras: true, ean: true, direccion1: true, direccion2: false},
  ]

  formatoEtiqueta: any;
  baseUrl: string = 'http://192.168.0.202:8080/ControladorFormatoEtiqueta';

  constructor(private http: HttpClient) { }
  getFormatos() {
    return this.formatosEtiqueta; //comentar cuando esté el servidor

  }
  // getFormatosEtiqueta() : Observable<FormatoEtiqueta[]> {
  //   return this.http.get<FormatoEtiqueta[]>(this.baseUrl);
  // }
  


   getFormatoById(idFormato: number): Observable<FormatoEtiqueta[]> {
     return this.http.get<FormatoEtiqueta[]>(this.baseUrl + idFormato);
   }

  crearFormatoEtiqueta(formatoEtiqueta: FormatoEtiqueta): Observable<FormatoEtiqueta[]> {
    return this.http.post<FormatoEtiqueta[]>(this.baseUrl, formatoEtiqueta);
  }

  modificarFormatoEtiqueta(idFormato: number, formatoEtiqueta: FormatoEtiqueta): Observable<FormatoEtiqueta[]> {
    return this.http.put<FormatoEtiqueta[]>(this.baseUrl + idFormato, formatoEtiqueta);
  }



 borrarFormatoEtiqueta(idFormato: number): Observable<FormatoEtiqueta[]> {
  return this.http.delete<FormatoEtiqueta[]>(this.baseUrl + idFormato);
  }
}
