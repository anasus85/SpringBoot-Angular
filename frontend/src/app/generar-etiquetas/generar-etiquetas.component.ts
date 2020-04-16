import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EtiquetasService} from "../servicios/etiquetas.service";
import {EmpresasService} from "../servicios/empresas.service";
import { Etiqueta} from "../model/etiqueta";
import { Empresa} from "../model/empresa";

@Component({
  selector: 'app-generar-etiquetas',
  templateUrl: './generar-etiquetas.component.html',
  styleUrls: ['./generar-etiquetas.component.css']
})
export class GenerarEtiquetasComponent implements OnInit {
  formEtiquetaProducto: FormGroup;
  formEtiquetaEnvio: FormGroup;
  onProducto=false;
  onEP= true;
  onEE= true;
  onFormato=false;
  onEnvio=false;
  etiquetas: Array<Etiqueta>;
  empresas: Array<Empresa>;


  constructor(
    private etiquetaService: EtiquetasService,
    private empresasService: EmpresasService,
  ) { }

  ngOnInit(){
    this.formEtiquetaProducto = new FormGroup({
      idEtiqueta: new FormControl(''),
      idCliente: new FormControl(''),
     
     })

     this.etiquetas = this.etiquetaService.getEtiquetas();
     

     this.formEtiquetaEnvio = new FormGroup({
       idEmpresaMensajes: new FormControl(''),
      idEmpresaEmisora: new FormControl(''),
      idEmpresaReceptora: new FormControl(''),
     expedicion: new FormControl(''),
     referencia: new FormControl(''),
     kilos: new FormControl(''),
     bultos: new FormControl(''),
     reembolso: new FormControl(''),
     filas: new FormControl(''),
     columnas: new FormControl(''),
     
     })
     
    // this.empresas = this.empresasService.getEmpresas();
  }
  generarEtiqueta(){}
  generarEtiquetaEnvio(){}
  
  openProducto(){
    this.onProducto=true;
    this.onEE=false;
   }
  cerrarProducto(){
    this.onProducto=false;
    this.onEP= true;
    this.onEE= true;
     }
  openEnvio(){
    this.onEnvio=true;
    this.onEP=false;
  }
  cerrarEnvio(){
    this.onEnvio=false;
    this.onEP= true;
    this.onEE= true;

  }
  openFormato(){
    this.onFormato=true;
  }
  cerrarFormato(){
    this.onFormato=false;
  }
}
