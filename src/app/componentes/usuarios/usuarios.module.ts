import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { RegistrarUsuariosComponent } from './registrar-usuarios/registrar-usuarios.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { ModificarContrasenaComponent } from './modificar-contrasena/modificar-contrasena.component';
import { UsuariosRouting } from './usuarios.routes';



@NgModule({
  declarations: [
    TablaUsuariosComponent,
    VerPerfilComponent,
    RegistrarUsuariosComponent,
    EditarPerfilComponent,
    ModificarContrasenaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRouting
  ]
})
export class UsuariosModule { }
