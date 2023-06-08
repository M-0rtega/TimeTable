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
  arrMat = this.generateRandomNumberArray(50, 1, 25);
  arrProf = this.generateRandomNumberArray(20, 1, 20);

  constructor(private materiaService: MateriaService, private profesorService: ProfesorService) { }

  ngOnInit() {
      this.materias = this.materiaService.obtenerMaterias();
      this.profesores = this.profesorService.obtenerProfesores();
  }

  generateRandomNumberArray(length: number, min: number, max: number): number[] {
    const randomNumbers: number[] = [];
  
    for (let i = 0; i < length; i++) {
      const arrMat = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.push(arrMat);
    }
  
    return randomNumbers;
  }

  generar(){
    this.arrMat = this.generateRandomNumberArray(50, 1, 25);
    this.arrProf = this.generateRandomNumberArray(20, 1, 20);  
  }
  
}