import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  home: string = '/home'; // Define the home property and assign a value
  profesores: string = '/profesores';
  materias: string = '/materias';
  horarios: string = '/horarios';
  constructor() { }

}
