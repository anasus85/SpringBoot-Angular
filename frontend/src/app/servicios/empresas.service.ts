import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa} from "../model/empresa"
import { Direccion} from "../model/direccion"
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3004/api/empresas';
  listarUrl: string = "http://localhost:3004/api/empresas/listar"

  
getEmpresas(){
  return this.http.get<any>(this.listarUrl)
}
 
getEmpresaById(idEmpresa){
  const _id= idEmpresa;
  const url = `${this.baseUrl}/${_id}`
  return this.http.get<any>(url);

}
 

  crearEmpresa(empresa: Empresa){
    return this.http.post<any>(this.baseUrl, empresa);
  }

  modificarEmpresa(empresa, idEmpresa) {
    const _id= idEmpresa;
    const url = `${this.baseUrl}/${_id}`
    return this.http.put<any>(url, empresa);
  }



 borrarEmpresa(empresa){
  const _id= empresa.idEmpresa;
    const url = `${this.baseUrl}/${_id}`
    return this.http.delete<any>(url);
  }
}
