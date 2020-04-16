import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {EtiquetasService} from "../../../servicios/etiquetas.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Etiqueta} from "../../../model/etiqueta"
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crear-etiqueta',
  templateUrl: './crear-etiqueta.component.html',
  styleUrls: ['./crear-etiqueta.component.css']
})
export class CrearEtiquetaComponent implements OnInit {
  formEtiqueta: FormGroup;

  constructor(
    private etiquetasService: EtiquetasService,
    private router: Router,
    private ff:  FormBuilder,
    private mensajesService: MensajesService
  ) { }

  ngOnInit(): void {
    this.formEtiqueta = this.ff.group({
      idFormato: '',
     filas: '',
     columnas: ''

  })

}

guardarEtiqueta() {


  this.etiquetasService.crearEtiqueta(this.formEtiqueta.value)
  .subscribe((res:any)=>{
      this.mensajesService.setMensaje(res.mensaje, 'Etiqueta añadida correctamente');
       this.router.navigate(['listar-etiqueta']);
  },(err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
      
  });
}

limpiarCampos(){
this.formEtiqueta = this.ff.group({
  idFormato: '',
  filas: '',
  columnas: ''
})

}
}
