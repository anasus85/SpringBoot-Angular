import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EmpresasService} from "../../servicios/empresas.service"
import { Empresa} from "../../model/empresa"
import {ProductosService} from "../../servicios/productos.service"
import { Producto} from "../../model/producto"
import { Router, ActivatedRoute} from '@angular/router'; 
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  formProducto: FormGroup;
  productos: Array<Producto>;
  empresas: Array<Empresa>;
  idProducto: number;
  producto: any;

  constructor(
    private empresasService: EmpresasService,
    private router: Router,
    private route: ActivatedRoute,
    private mensajesService: MensajesService,
    private productosService: ProductosService,
    private ff:  FormBuilder
  ) { }

  ngOnInit(): void {
    this.producto = this.productosService.getProductos(); //comentar cuando este activo el servidor
     
     this.productosService.getProductoById(this.idProducto)

     
     this.idProducto = this.route.snapshot.params.idProducto;
     
    this.formProducto = new FormGroup({
      codigoCliente: new FormControl(''),
      ean: new FormControl(''),
      idEmpresa: new FormControl(''),
    })
    this.productos = this.productosService.getProductos();
        
    this.productosService.getProductoById(this.idProducto)
                        // .subscribe((res:any)=>{
                        //   this.producto = res.producto;
                        //   this.formProducto.get('codigoCliente').value,
                          //   this.formProducto.get('ean').value,
                        //   this.formEmpresa.get('idEmpresa').value
                        // }, (err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning')})

                         
  }

  modificarProducto(){
        
    this.productosService.modificarProducto(this.idProducto, this.formProducto.value)
//               .subscribe((res:any)=>{
//                 this.mensajesService.setMensaje(res.mensaje, 'Producto modificado correctamente')
//               this.router.navigate(['productos']);
//               },(err:any)=>{ this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');      
//  });
  }

  limpiarCampos(){
    this.formProducto = this.ff.group({
      codigoCliente: new FormControl(''),
      ean: new FormControl(''),
      idEmpresa: new FormControl(''),
     
     
    })};

}
