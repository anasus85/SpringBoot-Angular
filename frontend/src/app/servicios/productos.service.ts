import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto} from "../model/producto"
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  idProducto: number;
  producto: any;
  productos: Array<Producto>;
  baseUrl: string = 'http://192.168.0.202:8080/producto';

  constructor(private http: HttpClient) { }

getProductos() {
  return this.productos;
}

// getProductos() : Observable<Producto[]> {
//   return this.http.get<Producto[]>(this.baseUrl);
// }


getProductoById(idProducto: number): Observable<Producto[]> {
 return this.http.get<Producto[]>(this.baseUrl + idProducto);
}

crearProducto(direccion: Producto): Observable<Producto[]> {
 return this.http.post<Producto[]>(this.baseUrl, direccion);
}

modificarProducto(idProducto: number, producto: Producto): Observable<Producto[]> {
 return this.http.put<Producto[]>(this.baseUrl + idProducto, producto);
}

borrarProducto(idProducto: number): Observable<Producto[]> {
 return this.http.delete<Producto[]>(this.baseUrl + idProducto);
}}
