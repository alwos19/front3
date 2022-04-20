import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { RegistrarUsuariosComponent } from './registrar-usuarios/registrar-usuarios.component';
import { ModificarContrasenaComponent } from './modificar-contrasena/modificar-contrasena.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full',
  },
  {
    path: 'tabla-usuarios',
    component: TablaUsuariosComponent,
  },
  {
    path: 'ver-perfil/:id',
    component: VerPerfilComponent,
  },
  {
    path: 'editar-perfil/:id',
    component: EditarPerfilComponent,
  },
  {
    path: 'registrar-usuarios',
    component: RegistrarUsuariosComponent,
  },
  {
    path: 'modificar-contrasena/:id',
    component: ModificarContrasenaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRouting {}
