//claudia cecilia rossi
import { Injectable } from '@angular/core';

@Injectable()
export class EstudiosService {

  private estudios:any[]= [
      {
        nombre: "Bachelor Degreein Computer Science",
        img: "assets/img/uns.jpg",
        fecha: "1985 / 1991",
        lugar:"Universidad Nacional del Sur",
        posicion:"0"
      },
      {
        nombre: "Diplomature in .NET C#",
        img: "assets/img/utn.png",
        fecha: "2018-09 / 2019-02",
        lugar:"Universidad Tecnológica Argentina",
        posicion:"1"
      },
      {
        nombre: "Programming with Angular",
        img: "assets/img/utn.png",
        fecha: "2019-06 / 2019-07",
        lugar:"Universidad Tecnológica Argentina",
        posicion:"1"
      },
      {
        nombre: "First Certificate Level English",
        img: "assets/img/cultura.jpg",
        fecha: "1973 / 1983",
        lugar:"Cultura Inglesa",
        posicion:"1"
      }
    ];

  constructor() {
    //console.log("Servicio listo");
   }

   getEstudios(){
     return this.estudios;
    
   }

   getEstudio(idx: string){
     return this.estudios[idx];
     
   }
/*
 hayEstudios(termino:string):boolean {
  let heroesArr:any[] = [];
  termino = termino.toLowerCase();

  for (let heroe of this.heroes){
    
    let nombre = heroe.nombre.toLowerCase();
    if (nombre.indexOf(termino) >=0){
       return true;
    }
  }
}

buscarEstudios(termino:string):any[] {
    let estudiosArr:any[] = [];
    termino = termino.toLowerCase();

    for (let estudio of this.estudios){
      
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >=0){
        heroesArr.push (heroe); 
      }
    }
    
    return heroesArr;
  }
*/
}
