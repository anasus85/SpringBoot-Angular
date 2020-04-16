import { Component, OnInit } from '@angular/core';
import {Etiqueta} from 'src/app/model/etiqueta';
import {EtiquetasService} from "../../../servicios/etiquetas.service";
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-listar-etiqueta',
  templateUrl: './listar-etiqueta.component.html',
  styleUrls: ['./listar-etiqueta.component.css']
})
export class ListarEtiquetaComponent implements OnInit {
  etiquetas: Array<Etiqueta>;
  idEtiqueta: number;

  formSearch: FormGroup;

  constructor(private etiquetasService: EtiquetasService
    
  ) { }

  ngOnInit(): void {

    this.listarEtiquetas();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
  }

  listarEtiquetas() {
    this.etiquetasService.getEtiquetas()
              // .subscribe((res:any)=>{
                  
              //     this.etiquetas = res.etiquetas;
              //   },(err:any)=>{
                 
              //     console.log(err);
              //   })
  }

  borrarEtiqueta(idEtiqueta) {
    this.etiquetasService.borrarEtiqueta(idEtiqueta)
                // .subscribe((res:any)=>{
                   
                //     this.listarEtiquetas();
                //   },(err:any)=>{
                //     console.log(err);
                   
                //   })
  }


}
