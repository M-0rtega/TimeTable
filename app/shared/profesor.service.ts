import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfesorModel } from './profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  BASE_URL='http://localhost:3000'
  constructor(private http: HttpClient) {}

  obtenerProfesores() {
    return this.http.get<ProfesorModel[]>(this.BASE_URL+'/profesores');
  }

  obtenerProfesor(id: string) {
    return this.http.get<ProfesorModel[]>(`${this.BASE_URL}/profesores/${id}`);
  }

  agregarProfesor(profesor: ProfesorModel) {
    return this.http.post<string>(`${this.BASE_URL}/profesores/agregar`, profesor);
  }

  actualizarProfesor(profesor: ProfesorModel) {
    //console.log("Entro al método")
    return this.http.put<string>(`${this.BASE_URL}/profesores/actualizar/${profesor.id_profesor}`, profesor)
  }

  borrarProfesor(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/profesores/borrar/${id}`)
  }
}
