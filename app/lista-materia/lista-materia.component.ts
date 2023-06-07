import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaModel } from '../shared/materia.model';
import { MateriaService } from '../shared/materia.service';

@Component({
  selector: 'app-lista-materia',
  templateUrl: './lista-materia.component.html',
  styleUrls: ['./lista-materia.component.css']
})
export class ListaMateriaComponent implements OnInit{

  materias: Observable<MateriaModel[]> | undefined;

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
      this.materias = this.materiaService.obtenerMaterias();
  }

  borrarMateria(id: string) {
    this.materiaService.borrarMateria(id).subscribe(data => {
      console.log(data);
    })
  }

}
