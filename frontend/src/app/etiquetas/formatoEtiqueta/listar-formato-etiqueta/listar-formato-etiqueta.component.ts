import { Component, OnInit } from '@angular/core';
import {FormatoEtiqueta} from '../../../model/formato-etiqueta';
import {FormatosEtiquetaService} from "../../../servicios/formatos-etiqueta.service";
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-listar-formato-etiqueta',
  templateUrl: './listar-formato-etiqueta.component.html',
  styleUrls: ['./listar-formato-etiqueta.component.css']
})
export class ListarFormatoEtiquetaComponent implements OnInit {
  formatosEtiqueta: Array<FormatoEtiqueta>;

  constructor(private formatosEtiquetaService: FormatosEtiquetaService) { }

  ngOnInit(): void {
    this.formatosEtiqueta = this.formatosEtiquetaService.getFormatos();}

    borrarFormatoEtiqueta(idFormato) {
  }

}