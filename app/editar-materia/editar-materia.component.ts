import { Component, OnInit } from '@angular/core';
import { MateriaModel } from '../shared/materia.model';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { MateriaService } from '../shared/materia.service';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {

  id = ''
  materia = new MateriaModel("","","", 0, 0, 0,"");

  constructor(
    private materiaService: MateriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.materiaService.obtenerMateria(this.id).subscribe(data => {
        this.materia = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }


  onSubmit() {
    console.log('onSubmit');

    if(this.materia.id_materia) {
      
      this.materiaService.actualizarMateria(this.materia).subscribe(data => {
        alert(data)
        this.router.navigate(['/materias'])
      })
    } else {
      console.log('crear');
      this.materiaService.agregarMateria(this.materia).subscribe(data => {
        alert(data)
        this.router.navigate(['/materias'])
      })
    }
  }

}
