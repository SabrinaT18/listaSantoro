import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
variableNota= 7  ;
hoy = Date.now();

alumnos = [
{nombre: 'Juan'  ,
apellido: 'Perez'  ,
fechaNacimiento:'25/12/1991' ,
nota: 9,
},
{nombre: 'Candela'  ,
apellido: 'Benitez'  ,
fechaNacimiento:'05/09/1988' ,
nota: 10,
},
{nombre: 'Marcos'  ,
apellido: 'García'  ,
fechaNacimiento:'12/02/1983' ,
nota: 4,
},
{nombre: 'Alejo'  ,
apellido: 'Nuñez'  ,
fechaNacimiento:'18/05/1984' ,
nota: 6,
},
{nombre: 'Guadalupe'  ,
apellido: 'Suarez'  ,
fechaNacimiento:'21/08/1994' ,
nota: 2,
},
{nombre: 'Victoria'  ,
apellido: 'Lopez'  ,
fechaNacimiento:'16/04/1985' ,
nota: 8,
},

]


  constructor() { }

  ngOnInit(): void {
  }
  
  cambiarNota(){
    this.variableNota = Math.round (Math.random()*10)
  }

}
