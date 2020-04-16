import { Component, OnInit } from '@angular/core';
import {Producto} from 'src/app/model/producto';
import {ProductosService} from "src/app/servicios/productos.service";
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  productos: Array<Producto>;
  idProducto: number;

  formSearch: FormGroup;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
      // this.productos = this.productosService.getProductos();} //comentar cuando funcione servidor
    
      this.listarProductos();
      this.formSearch = new FormGroup({
        search: new FormControl('')
      });
      
    }
    listarProductos() {
      this.productosService.getProductos()
                // .subscribe((res:any)=>{
                    
                //     this.productos = res.productos;
                //   },(err:any)=>{
                   
                //     console.log(err);
                //   })
    }
  
    borrarProducto(idProducto) {
      this.productosService.borrarProducto(idProducto)
                  // .subscribe((res:any)=>{
                     
                  //     this.listarProductos();
                  //   },(err:any)=>{
                  //     console.log(err);
                     
                  //   })
    }
  }


