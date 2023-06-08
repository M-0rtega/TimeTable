import { Component, OnInit } from '@angular/core';
import { ProfesorModel } from '../shared/profesor';
import { ProfesorService } from '../shared/profesor.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent implements OnInit {

  id = ''
  profesor = new ProfesorModel("", "", "", "", "", 0, 0);

  constructor(
    private profesorService: ProfesorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.profesorService.obtenerProfesor(this.id).subscribe(data => {
        this.profesor = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  } 

  onSubmit() {
    console.log('onSubmit');
    if(this.profesor.id_profesor) {
      this.profesorService.actualizarProfesor(this.profesor).subscribe(data => {
        alert(data)
        this.router.navigate(['/profesores'])
      })
    } else {
      console.log('crear');
      this.profesorService.agregarProfesor(this.profesor).subscribe(data => {
        alert(data)
        this.router.navigate(['/profesores'])
      })
    }
  }
}
