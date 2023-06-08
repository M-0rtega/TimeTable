import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMateriaComponent } from './lista-materia/lista-materia.component';
import { ListaProfesorComponent } from './lista-profesor/lista-profesor.component';
import { EditarProfesorComponent } from './editar-profesor/editar-profesor.component';
import { HomeComponent } from './home/home.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { ListaHorariosComponent } from './lista-horarios/lista-horarios.component';


const routes: Routes = [
  {path:'materias', component:ListaMateriaComponent},
  {path:'materias/editar/:id', component:EditarMateriaComponent},
  {path:'materias/agregar', component:EditarMateriaComponent},
  {path:'profesores', component:ListaProfesorComponent},
  {path:'profesores/editar/:id', component:EditarProfesorComponent},
  {path:'profesores/agregar', component:EditarProfesorComponent},
  {path:'horarios', component:ListaHorariosComponent},
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
