import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {DireccionesService} from "../../servicios/direcciones.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Direccion} from "../../model/direccion"
import { Router } from '@angular/router'; 
import  *  as  data  from  "../../../assets/direcciones.json"


@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.css']
})
export class CrearDireccionComponent implements OnInit {
  
  formDireccion: FormGroup;
  constructor( 
    private direccionesService: DireccionesService,
    private router: Router,
    private ff:  FormBuilder,
    private mensajesService: MensajesService) { }

  ngOnInit(): void {
    this.formDireccion = this.ff.group({
     direccion: '',
     codigoPostal: '',
     destino: ''
    })
  }

  guardarDireccion() {
  
    this.direccionesService.crearDireccion(this.formDireccion.value)
    .subscribe((res:any)=>{
      console.log(res)  
      this.router.navigate([["/listar-direccion"]]);
    },(err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
        
    });
}

limpiarCampos(){
  this.formDireccion = this.ff.group({
    direccion: '',
   codigoPostal: '',
   destino: ''
  })

}
}


