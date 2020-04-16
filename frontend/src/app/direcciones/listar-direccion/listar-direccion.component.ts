import { Component, OnInit } from '@angular/core';
import {Direccion} from 'src/app/model/direccion';
import {DireccionesService} from "src/app/servicios/direcciones.service";
import { FormGroup, FormControl } from '@angular/forms';
import{Router} from "@angular/router"
//import  *  as  data  from  "../../../assets/direcciones.json"

@Component({
  selector: 'app-listar-direccion',
  templateUrl: './listar-direccion.component.html',
  styleUrls: ['./listar-direccion.component.css']
})
export class ListarDireccionComponent implements OnInit {
  
  direcciones: any;
  idDireccion: number;

  formSearch: FormGroup;

  constructor(private direccionesService: DireccionesService,
    private router: Router) { }

  ngOnInit(): void {
     
    
    this.direccionesService.getDirecciones()
      .subscribe(
        res=>{this.direcciones = res},
        err=>{console.log(err)}
      )

    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
    
  }


  borrarDireccion(direccion) {
    this.direccionesService.borrarDireccion(direccion)
    .subscribe(
      res=>{
        const index = this.direcciones.indexOf(direccion);
        if(index>-1){
          this.direcciones.splice(index,1)
        }

      },
      err=>{
        console.log(err)
        }
    
    )
};


}
