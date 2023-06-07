import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaProfesorComponent } from './lista-profesor/lista-profesor.component';
import { EditarProfesorComponent } from './editar-profesor/editar-profesor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ProfesorService } from './shared/profesor.service';
import { ListaMateriaComponent } from './lista-materia/lista-materia.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { ListaHorariosComponent } from './lista-horarios/lista-horarios.component';
import { MateriaService } from './shared/materia.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaProfesorComponent,
    EditarProfesorComponent,
    NavbarComponent,
    ResultadoComponent,
    ListaMateriaComponent,
    EditarMateriaComponent,
    ListaHorariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProfesorService,
    MateriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
