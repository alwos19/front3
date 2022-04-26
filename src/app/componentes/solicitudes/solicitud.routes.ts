import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { TablaSolicitudesComponent } from './tabla-solicitudes/tabla-solicitudes.component';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'solicitudes',
    component: TablaSolicitudesComponent
  },

  {
      path: 'ver-solicitudes',
      component: VerSolicitudComponent
  },
  {
      path: 'editar-solicitud/:id',
      component: EditarSolicitudComponent
  }
 


  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolcitudesRouting {}