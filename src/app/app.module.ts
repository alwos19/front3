import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SolicitudesModule } from './componentes/solicitudes/solicitudes.module';
import { UsuariosModule } from './componentes/usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    SolicitudesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
