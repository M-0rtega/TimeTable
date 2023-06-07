import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MateriaModel } from './materia.model';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  BASE_URL='http://localhost:3000'
  constructor(private http: HttpClient) {}

  obtenerMaterias() {
    return this.http.get<MateriaModel[]>(this.BASE_URL+'/materias');
  }

  obtenerMateria(id: string) {
    return this.http.get<MateriaModel[]>(`${this.BASE_URL}/materias/${id}`);
  }

  agregarMateria(materia: MateriaModel) {
    return this.http.post<string>(`${this.BASE_URL}/materias/agregar`, materia);
  }

  actualizarMateria(materia: MateriaModel) {
    console.log("entre al metodo de actualizar")
    return this.http.put<string>(`${this.BASE_URL}/materias/actualizar/${materia.id_materia}`, materia)
  }

  borrarMateria(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/materias/borrar/${id}`)
  }
}
