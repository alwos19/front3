import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaSolicitudesComponent } from './tabla-solicitudes/tabla-solicitudes.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';
import { SolcitudesRouting } from './solicitud.routes';



@NgModule({
  declarations: [
    TablaSolicitudesComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    VerSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolcitudesRouting
  ]
})
export class SolicitudesModule { }
