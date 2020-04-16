import { Component, OnInit,  ViewChild, ElementRef  } from '@angular/core';
import {Empresa} from 'src/app/model/empresa';
import {EmpresasService} from "src/app/servicios/empresas.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: Array<Empresa>;
  idEmpresa: string;

  formSearch: FormGroup;


  constructor(private empresasService: EmpresasService,) { }

  ngOnInit(): void { 
    this.listarEmpresas();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
    
  }
  listarEmpresas() {
    this.empresasService.getEmpresas()
              // .subscribe((res:any)=>{
                  
              //     this.empresas = res.empresas;
              //   },(err:any)=>{
                 
              //     console.log(err);
              //   })
  }

  borrarEmpresa(idEmpresa) {
    this.empresasService.borrarEmpresa(idEmpresa)
                .subscribe((res:any)=>{
                   
                    this.listarEmpresas();
                  },(err:any)=>{
                    console.log(err);
                   
                  })
  }

}
