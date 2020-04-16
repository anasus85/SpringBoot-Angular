import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EmpresasService} from "../../servicios/empresas.service"
import {DireccionesService} from "../../servicios/direcciones.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Direccion} from "../../model/direccion";
import { Empresa} from "../../model/empresa";
import { Router } from '@angular/router'; 
import  *  as  data  from  "../../../assets/direcciones.json"



@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  formEmpresa: FormGroup;
  direcciones: any;
  

  constructor(
    private empresasService: EmpresasService,
    private direccionesService: DireccionesService,
    private router: Router,
    private mensajesService: MensajesService, 
    private ff:  FormBuilder
    ){}

  ngOnInit() {
   
    this.formEmpresa = new FormGroup({
      nombreEmpresa: new FormControl(''),
      idDireccion: new FormControl(''),
     
     })
     
     this.direccionesService.getDirecciones()
     .subscribe(
       res=>{this.direcciones = res},
       err=>{console.log(err)}
     )
  }


  crearEmpresa() {
   
    let  empresa = {
      nombreEmpresa: this.formEmpresa.get('nombreEmpresa').value,
      idDireccion: this.formEmpresa.get('idDireccion').value

    }
    

    this.empresasService.crearEmpresa(this.formEmpresa.value)
    .subscribe((res:any)=>{
      console.log(res)  
      this.router.navigate([["/listar-empresa"]]);
    },(err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
        
    });
}
limpiarCampos(){
  this.formEmpresa = new FormGroup({
    nombreEmpresa: new FormControl(''),
    idDireccion: new FormControl(''),
   
   })
}
}
