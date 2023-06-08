import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaModel } from '../shared/materia.model';
import { MateriaService } from '../shared/materia.service';
import { ProfesorService } from '../shared/profesor.service';
import { ProfesorModel } from '../shared/profesor';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.component.html',
  styleUrls: ['./lista-horarios.component.css']
})
export class ListaHorariosComponent {

  materias: Observable<MateriaModel[]> | undefined;
  profesores: Observable<ProfesorModel[]> | undefined;

  constructor(private materiaService: MateriaService, private profesorService: ProfesorService) { }

  ngOnInit() {
      this.materias = this.materiaService.obtenerMaterias();
      this.profesores = this.profesorService.obtenerProfesores();
  }

}
