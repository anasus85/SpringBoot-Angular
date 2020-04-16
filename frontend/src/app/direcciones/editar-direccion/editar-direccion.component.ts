import { Component, OnInit } from '@angular/core';
import {Direccion} from 'src/app/model/direccion';
import {DireccionesService} from "src/app/servicios/direcciones.service";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router'; 
import { MensajesService } from 'src/app/servicios/mensajes.service';
import  *  as  data  from  "../../../assets/direcciones.json"


@Component({
  selector: 'app-editar-direccion',
  templateUrl: './editar-direccion.component.html',
  styleUrls: ['./editar-direccion.component.css']
})
export class EditarDireccionComponent implements OnInit {

//direcciones = (data as any).default;
  formDireccion: FormGroup;
  idDireccion: number;
  direccion: any;

  constructor(
    private direccionesService: DireccionesService,
    private router: Router,
    private route: ActivatedRoute,
    private mensajesService: MensajesService,
    private ff:  FormBuilder
  ) { 
     
  }

  ngOnInit() {
    this.formDireccion = new FormGroup({
       direccion: new FormControl(""),
      codigoPostal: new FormControl(""),
      destino: new FormControl("")
     })
     
    this.idDireccion = this.route.snapshot.params.idDireccion;
    console.log(this.idDireccion);

     this.direccion= this.direccionesService.getDireccionById(this.idDireccion)
     .subscribe(
      res=>{ this.direccion = res;
        // this.formDireccion.get('direccion').setValue(this.direccion.direccion);
        // this.formDireccion.get('codigoPostal').setValue(this.direccion.codigoPostal);
        // this.formDireccion.get('destino').setValue(this.direccion.destino);
      console.log(this.direccion)},
      err=>{console.log(err)}
    )  


    }

    modificarDireccion(){

      let direccion = {
         direccion: this.formDireccion.get('direccion').value,
        codigoPostal:  this.formDireccion.get('codigoPostal').value,
        destino: this.formDireccion.get('destino').value
      }
      this.direccionesService.modificarDireccion(direccion, this.idDireccion)
                .subscribe(
                  res=>{                 
                    
                  console.log(res);
                  this.router.navigate([["/listar-direccion"]]);
                },(err:any)=>{console.log(err);      
   });
    }

    limpiarCampos(direccion){
      this.formDireccion = new FormGroup({
        direccion: new FormControl(""),
       codigoPostal: new FormControl(""),
       destino: new FormControl("")
  
       
      })
      
  
};

}