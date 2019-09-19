//claudia cecilia rossi
import { Injectable } from '@angular/core';

@Injectable()
export class HobbiesService {

  private hobbies:any[]= [
      {
        nombre: "Piano",
        img: "assets/img/uns.jpg",
        fecha: "1985 / 1991",
        lugar:"Universidad Nacional del Sur",
        posicion:"0"
      },
      {
        nombre: "Hockey",
        img: "assets/img/utn.png",
        fecha: "2018-09 / 2019-02",
        lugar:"Universidad Tecnológica Argentina",
        posicion:"1"
      }
    ];

  constructor() {
    //console.log("Servicio listo");
   }

   getHobbies(){
     return this.hobbies;
    
   }

   getHobbie(idx: string){
     return this.hobbies[idx];
     
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
