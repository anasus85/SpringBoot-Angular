import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpresasService } from './servicios/empresas.service';
import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './empresas/listar-empresa/listar-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';
import { CrearDireccionComponent } from './direcciones/crear-direccion/crear-direccion.component';
import { ListarDireccionComponent } from './direcciones/listar-direccion/listar-direccion.component';
import { EditarDireccionComponent } from './direcciones/editar-direccion/editar-direccion.component';
import { CrearFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/crear-formato-etiqueta/crear-formato-etiqueta.component';
import { ListarFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/listar-formato-etiqueta/listar-formato-etiqueta.component';
import { EditarFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/editar-formato-etiqueta/editar-formato-etiqueta.component';
import { GenerarEtiquetasComponent } from './generar-etiquetas/generar-etiquetas.component';
import { ListarEtiquetaComponent } from './etiquetas/paginadoEtiqueta/listar-etiqueta/listar-etiqueta.component';
import { CrearEtiquetaComponent } from './etiquetas/paginadoEtiqueta/crear-etiqueta/crear-etiqueta.component';
import { EditarEtiquetaComponent } from './etiquetas/paginadoEtiqueta/editar-etiqueta/editar-etiqueta.component';
import { ListarProductoComponent } from './productos/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EtiquetaProductoComponent } from './generar-etiquetas/etiqueta-producto/etiqueta-producto.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearEmpresaComponent,
    ListarEmpresaComponent,
    EditarEmpresaComponent,
     CrearDireccionComponent,
    ListarDireccionComponent,
    EditarDireccionComponent,
    CrearFormatoEtiquetaComponent,
    ListarFormatoEtiquetaComponent,
    EditarFormatoEtiquetaComponent,
    GenerarEtiquetasComponent,
    ListarEtiquetaComponent,
    CrearEtiquetaComponent,
    EditarEtiquetaComponent,
    ListarProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    EtiquetaProductoComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpresasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
