import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FormatoEtiqueta } from 'src/app/model/formato-etiqueta';
import {FormatosEtiquetaService} from "../../../servicios/formatos-etiqueta.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-formato-etiqueta',
  templateUrl: './editar-formato-etiqueta.component.html',
  styleUrls: ['./editar-formato-etiqueta.component.css']
})
export class EditarFormatoEtiquetaComponent implements OnInit {
  formFormatoEtiqueta: FormGroup;
  formatos: Array<FormatoEtiqueta>;
  idFormato: number;
  formato: FormatoEtiqueta;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mensajesService: MensajesService,
    private formatosEtiquetaService: FormatosEtiquetaService,
    private ff:  FormBuilder
  ) { }

  ngOnInit() : void  {
    this.idFormato = this.route.snapshot.params.idFormato;
    this.formFormatoEtiqueta = new FormGroup({
      nombreFormato: new FormControl(''),
      codCliente: new FormControl(''),
      codClienteExtendido: new FormControl(''),
      codBarras:new FormControl(''),
      ean:new FormControl(''),
      direccion1: new FormControl(''),
      direccion2: new FormControl(''),
      
          
     })
     this.formatosEtiquetaService.getFormatoById(this.idFormato).subscribe((res:any)=>{
      this.formFormatoEtiqueta.get('nombreFormato').value,
      this.formFormatoEtiqueta.get('codCliente').value,
      this.formFormatoEtiqueta.get('codClienteExtendido').value,
      this.formFormatoEtiqueta.get('codBarras').value,
      this.formFormatoEtiqueta.get('ean').value,
      this.formFormatoEtiqueta.get('direccion1').value,
      this.formFormatoEtiqueta.get('direccion2').value
     }, (err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning')})


  }

   modificarFormatoEtiqueta() {


    this.formatosEtiquetaService.modificarFormatoEtiqueta(this.idFormato, this.formFormatoEtiqueta.value)
                .subscribe((res:any)=>{
                  this.mensajesService.setMensaje(res.mensaje, 'Formato modificada correctamente')
                this.router.navigate(['listar-formato']);
                },(err:any)=>{ this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');      
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
