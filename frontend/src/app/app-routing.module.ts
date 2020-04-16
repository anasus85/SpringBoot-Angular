import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';

import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './empresas/listar-empresa/listar-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';

import { CrearProductoComponent } from '../app/productos/crear-producto/crear-producto.component';
import { ListarProductoComponent } from '../app/productos/listar-producto/listar-producto.component';
import { EditarProductoComponent } from '../app/productos/editar-producto/editar-producto.component';

import { EditarDireccionComponent } from './direcciones/editar-direccion/editar-direccion.component';
import { CrearDireccionComponent } from './direcciones/crear-direccion/crear-direccion.component';
import { ListarDireccionComponent } from './direcciones/listar-direccion/listar-direccion.component';
import { ListarFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/listar-formato-etiqueta/listar-formato-etiqueta.component';
import { GenerarEtiquetasComponent } from './generar-etiquetas/generar-etiquetas.component';
import { CrearFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/crear-formato-etiqueta/crear-formato-etiqueta.component';
import { EditarFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/editar-formato-etiqueta/editar-formato-etiqueta.component';
import { ListarEtiquetaComponent } from './etiquetas/paginadoEtiqueta/listar-etiqueta/listar-etiqueta.component';
import { CrearEtiquetaComponent } from './etiquetas/paginadoEtiqueta/crear-etiqueta/crear-etiqueta.component';
import { EditarEtiquetaComponent } from './etiquetas/paginadoEtiqueta/editar-etiqueta/editar-etiqueta.component';


const routes: Routes = [
  // {path: "", component:NavComponent},
  {path: "", component:InicioComponent},
  {path: "empresas", component:ListarEmpresaComponent},
  {path:"empresas/crear-empresa", component:CrearEmpresaComponent},
  {path:"empresas/editar-empresa/:idEmpresa", component:EditarEmpresaComponent},

  {path: "direcciones", component:ListarDireccionComponent},
  {path:"direcciones/crear-direccion", component:CrearDireccionComponent},
  {path:"direcciones/editar-direccion/:idDireccion", component:EditarDireccionComponent},

  {path: "productos", component:ListarProductoComponent},
  {path:"productos/crear-producto", component:CrearProductoComponent},
  {path:"productos/editar-producto/:idProducto", component:EditarProductoComponent},


  {path:"etiquetas/formatoEtiqueta", component:ListarFormatoEtiquetaComponent},
  {path:"etiquetas/formatoEtiqueta/crear-formato-etiqueta", component:CrearFormatoEtiquetaComponent},
  {path:"etiquetas/formatoEtiqueta/editar-formato-etiqueta", component:EditarFormatoEtiquetaComponent},

  {path:"etiquetas/paginadoEtiqueta", component:ListarEtiquetaComponent},
  {path:"etiquetas/paginadoEtiqueta/crear-etiqueta", component:CrearEtiquetaComponent},
  {path:"etiquetas/paginadoEtiqueta/editar-etiqueta", component:EditarEtiquetaComponent},
  
  {path:"generar-etiquetas", component:GenerarEtiquetasComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
