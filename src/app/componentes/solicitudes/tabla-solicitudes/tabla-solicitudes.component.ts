import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import{ SolicitudService }from '../../../core/services/solicitud.service'

@Component({
  selector: 'app-tabla-solicitudes',
  templateUrl: './tabla-solicitudes.component.html',
  styleUrls: ['./tabla-solicitudes.component.css'],
  providers:[SolicitudService, DecimalPipe]
})
export class TablaSolicitudesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
