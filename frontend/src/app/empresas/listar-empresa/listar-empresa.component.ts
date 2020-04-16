import { Component, OnInit,  ViewChild, ElementRef  } from '@angular/core';
import {Empresa} from 'src/app/model/empresa';
import {EmpresasService} from "src/app/servicios/empresas.service";
import {DireccionesService} from "src/app/servicios/direcciones.service";
import { FormGroup, FormControl } from '@angular/forms';
import{Router} from "@angular/router"
import  *  as  data  from  "../../../assets/direcciones.json"


@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {
  empresas: any;
  empresa: any;
  direccion: any;
  direcciones: any;
  direccionEmpresa:String;
  //direcciones = (data as any).default;
  

  formSearch: FormGroup;


  constructor(private empresasService: EmpresasService, 
    private direccionesService: DireccionesService,
    private router: Router) { }

  ngOnInit()  { 
   

      this.direccionesService.getDirecciones()
      .subscribe(
        res=>{this.direcciones = res},
        err=>{console.log(err)}
      )

      this.empresasService.getEmpresas()
      .subscribe(
        res=>{
        
          this.empresas = res
          this.empresas.forEach(empresa => {
            let  idDireccion = empresa.idDireccion
            let direccion: any;
            let nombreDireccion: any
             this.direccionesService.getDireccionById(idDireccion)
          .subscribe(
            res=>{ direccion = res
                  nombreDireccion = direccion.direccion
                  empresa.nombreDireccion= nombreDireccion},
            err=>{console.log(err)}
          )
        
        },
        err=>{console.log(err)}
      )
    });

    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
    
    

    
    
  }
  

  borrarEmpresa(empresa) {
    this.empresasService.borrarEmpresa(empresa)
    .subscribe(
      res=>{
        const index = this.direcciones.indexOf(empresa);
        if(index>-1){
          this.direcciones.splice(index,1)
        }
        this.router.navigate([["/listar-empresa"]]);
      },
      err=>{
        console.log(err)
        }
    
    )
}
}