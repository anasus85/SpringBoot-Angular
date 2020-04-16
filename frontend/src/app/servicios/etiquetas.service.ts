import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etiqueta} from "../model/etiqueta"
import {Observable} from "rxjs/index"

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {
  etiquetas=[
    {idEtiqueta: 1, filas: 4, columnas: 5, idFormato: 1},
    {idEtiqueta: 2, filas: 4, columnas: 5, idFormato: 2},
    {idEtiqueta: 3, filas: 6, columnas: 5, idFormato: 2},
    {idEtiqueta: 4, filas: 2, columnas: 5, idFormato: 3},
    {idEtiqueta: 5, filas: 4, columnas: 5, idFormato: 1},
  ]
  etiqueta: any;
  idEtiqueta: number;
  baseUrl: string = 'http://192.168.0.202:8080/ControladorEtiquetas';

  constructor(private http: HttpClient) { }
  getEtiquetas() {
    return this.etiquetas;
  }

  // getEtiquetas() : Observable<Etiqueta[]> {
  //   return this.http.get<Etiqueta[]>(this.baseUrl);
  // }

  
  getEtiquetaById(idEtiqueta: number): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(this.baseUrl + idEtiqueta);
  }

  crearEtiqueta(etiqueta: Etiqueta): Observable<Etiqueta[]> {
    return this.http.post<Etiqueta[]>(this.baseUrl, Etiqueta);
  }

  modificarEtiqueta(idEtiqueta: number, etiqueta: Etiqueta): Observable<Etiqueta[]> {
    return this.http.put<Etiqueta[]>(this.baseUrl + idEtiqueta, etiqueta);
  }

  borrarEtiqueta(idEtiqueta: number): Observable<Etiqueta[]> {
    return this.http.delete<Etiqueta[]>(this.baseUrl + idEtiqueta);
  }
}

