import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
// import {
//   NgbdSortableHeader,
//   SortEvent,
// } from '../../../ng-bootstrap/sortable-header.directive';


@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  // usuarios$: Observable<Usuario[]>;
  Usuarios: any = [];
  listUsuarios = false;
  error = '';

  constructor() { }

  ngOnInit(): void {
  }

}
