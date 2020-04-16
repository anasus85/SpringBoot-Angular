import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EtiquetasService} from "../../../servicios/etiquetas.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Etiqueta} from "../../../model/etiqueta"
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-etiqueta',
  templateUrl: './editar-etiqueta.component.html',
  styleUrls: ['./editar-etiqueta.component.css']
})
export class EditarEtiquetaComponent implements OnInit {

  formEtiqueta: FormGroup;
  idEtiqueta: number;
  etiqueta: any;

  constructor(
    private etiquetasService: EtiquetasService,
    private router: Router,
    private route: ActivatedRoute,
    private mensajesService: MensajesService,
    private ff:  FormBuilder
  ) { }

  ngOnInit(): void {
    this.idEtiqueta = this.route.snapshot.params.idEtiqueta;
    this.formEtiqueta = new FormGroup({
      idFormato: new FormControl(""),
      filas: new FormControl(""),
      columnas: new FormControl("")
     })

     this.etiquetasService.getEtiquetaById(this.idEtiqueta)
     .subscribe((res:any)=>{
       this.etiqueta = res.etiqueta;
       this.formEtiqueta.get('idFormato').value,
       this.formEtiqueta.get('filas').value,
       this.formEtiqueta.get('columnas').value
     }, (err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning')})



  }

  modificarEtiqueta(){
        
    this.etiquetasService.modificarEtiqueta(this.idEtiqueta, this.formEtiqueta.value)
              .subscribe((res:any)=>{
                this.mensajesService.setMensaje(res.mensaje, 'Etiqueta modificada correctamente')
              this.router.navigate(['listar-etiqueta']);
              },(err:any)=>{ this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');      
 });
  }

  limpiarCampos(){
    this.formEtiqueta = this.ff.group({
      idFormato: '',
     filas: '',
     columnasº: ''
    })}

}
