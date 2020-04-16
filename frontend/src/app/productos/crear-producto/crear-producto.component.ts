import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EmpresasService} from "../../servicios/empresas.service"
import {ProductosService} from "../../servicios/productos.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Producto} from "../../model/producto";
import { Empresa} from "../../model/empresa";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  formProducto: FormGroup;
  productos: Array<Producto>;
  empresas: Array<Empresa>;
  idProducto: number;
  producto: any;

  constructor(
    private empresaService: EmpresasService,
    private productosService: ProductosService,
    private router: Router,
    private mensajesService: MensajesService, 
    private ff:  FormBuilder
  ) { }

  ngOnInit() {
    this.formProducto = new FormGroup({
      codigoCliente: new FormControl(''),
      ean: new FormControl(''),
      idEmpresa: new FormControl(''),
     
  })
  // this.empresas = this.empresaService.getEmpresas();

}
guardarProducto() {
   
  let  producto = {
    codigoCliente: this.formProducto.get('codigoCliente').value,
    ean: this.formProducto.get('ean').value,
    idEmpresa: this.formProducto.get('idEmpresa').value

  }
  localStorage.setItem("producto", JSON.stringify(producto)); //Comentar cuando esté activo
     
    // this.formProducto.get('idEmpresa').value,
  

  this.productosService.crearProducto(this.formProducto.value)
  .subscribe((res:any)=>{
      this.mensajesService.setMensaje(res.mensaje, 'Producto añadido correctamente');
       this.router.navigate(["/listar-producto"]);
  },(err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
      
  });
}
limpiarCampos(){
this.formProducto = new FormGroup({
  codigoCliente: new FormControl(''),
  ean: new FormControl(''),
  idEmpresa: new FormControl(''),
 
 })
}
}
