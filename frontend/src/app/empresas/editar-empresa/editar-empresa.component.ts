import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EmpresasService} from "../../servicios/empresas.service"
import { Empresa} from "../../model/empresa"
import {DireccionesService} from "../../servicios/direcciones.service"
import { Direccion} from "../../model/direccion"
import { Router, ActivatedRoute} from '@angular/router'; 
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
  
  formEmpresa: FormGroup;
  idEmpresa: number;
  empresa: any;
  direcciones: any;

  constructor(
    private empresasService: EmpresasService,
    private router: Router,
    private route: ActivatedRoute,
    private mensajesService: MensajesService,
    private direccionesService: DireccionesService,
    private ff:  FormBuilder
  ) { }

  ngOnInit()  {

    this.formEmpresa = new FormGroup({
      nombreEmpresa: new FormControl(""),
      idDireccion: new FormControl("")
    })

      
     this.idEmpresa = this.route.snapshot.params.idEmpresa;
     console.log(this.idEmpresa);
     
   

     this.empresa= this.empresasService.getEmpresaById(this.idEmpresa)
     .subscribe(
      res=>{ this.empresa = res;
        
         console.log(this.empresa)},
      err=>{console.log(err)}
     )

     this.direccionesService.getDirecciones()
     .subscribe(
       res=>{this.direcciones = res},
       err=>{console.log(err)}
     )

                         
  }

  modificarEmpresa(){
  
    let empresa = {
     nombreEmpresa: this.formEmpresa.get('nombreEmpresa').value,
     idDireccion:  this.formEmpresa.get('idDireccion').value,
     
   }
   this.empresasService.modificarEmpresa(empresa, this.idEmpresa)
             .subscribe(
               res=>{                 
                 
               console.log(res);
               this.router.navigate([["/listar-empresa"]]);
             },(err:any)=>{console.log(err);      
});
  
  }

  limpiarCampos(){
    this.formEmpresa = this.ff.group({
      nombreEmpresa: '',
      idDireccion: ''
     
    })};

}
