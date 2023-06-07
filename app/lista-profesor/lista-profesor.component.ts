import { Component, OnInit } from '@angular/core';
import { ProfesorModel } from '../shared/profesor';
import { Observable } from 'rxjs';
import { ProfesorService } from '../shared/profesor.service';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css']
})
export class ListaProfesorComponent implements OnInit {

  profesores: Observable<ProfesorModel[]> | undefined;

  constructor(private profesorService: ProfesorService) { }

  ngOnInit() {
    this.profesores = this.profesorService.obtenerProfesores();
  }

  borrarProfesor(id: string) {
    this.profesorService.borrarProfesor(id).subscribe(data => {
      console.log(data);
    })
  }

}
