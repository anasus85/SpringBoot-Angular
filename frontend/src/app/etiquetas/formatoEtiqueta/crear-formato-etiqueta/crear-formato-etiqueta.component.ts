import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FormatoEtiqueta } from 'src/app/model/formato-etiqueta';
import {FormatosEtiquetaService} from "../../../servicios/formatos-etiqueta.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crear-formato-etiqueta',
  templateUrl: './crear-formato-etiqueta.component.html',
  styleUrls: ['./crear-formato-etiqueta.component.css']
})
export class CrearFormatoEtiquetaComponent implements OnInit {

  formFormatoEtiqueta: FormGroup;
  formatos: Array<FormatoEtiqueta>;
  formato: FormatoEtiqueta;

  constructor(
    private router: Router,
    private mensajesService: MensajesService,
    private formatosEtiquetaService: FormatosEtiquetaService,
    private ff:  FormBuilder
    ) { }

  ngOnInit(){
    this.formFormatoEtiqueta = new FormGroup({
      nombreFormato: new FormControl(''),
      codCliente: new FormControl(''),
      codClienteExtendido: new FormControl(''),
      codBarras:new FormControl(''),
      ean:new FormControl(''),
      direccion1: new FormControl(''),
      direccion2: new FormControl(''),
      
          
     })
  }

   guardarFormatoEtiqueta() {
   
    let  formatoEtiqueta = {
      
      nombreFormato: this.formFormatoEtiqueta.get('nombreFormato').value,
codCliente: this.formFormatoEtiqueta.get('codCliente').value,
codClienteExtendido: this.formFormatoEtiqueta.get('codClienteExtendido').value,
codBarras: this.formFormatoEtiqueta.get('codBarras').value,
ean: this.formFormatoEtiqueta.get('ean').value,
direccion1: this.formFormatoEtiqueta.get('direccion1').value,
direccion2: this.formFormatoEtiqueta.get('direccion2').value,


    }
    localStorage.setItem("formatoEtiqueta", JSON.stringify(formatoEtiqueta)); //Comentar cuando esté activo
       
      // this.formEmpresa.get('idFormatoEtiqueta').value,
    

    this.formatosEtiquetaService.crearFormatoEtiqueta(this.formFormatoEtiqueta.value)
    .subscribe((res:any)=>{
        this.mensajesService.setMensaje(res.mensaje, 'Formato añadido correctamente');
         this.router.navigate(["/listar-formato-etiqueta"]);
    },(err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
        
    });
}

limpiarCampos(){
  this.formFormatoEtiqueta = new FormGroup({
    nombreFormato: new FormControl(''),
    codCliente: new FormControl(''),
    codClienteExtendido: new FormControl(''),
    codBarras:new FormControl(''),
    ean:new FormControl(''),
    direccion1: new FormControl(''),
    direccion2: new FormControl(''),
            
   })}


}
