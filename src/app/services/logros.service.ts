//claudia cecilia rossi
import { Injectable } from '@angular/core';

@Injectable()
export class LogrosService {

  private logros:any[]= [
      {
        lugar: "Technisys- e-galicia.com",
        img: "assets/img/e-galicia.png",
        descripcion:"As project manager, led a multidisciplinary team responsible for the first banking WEB site: www.egalicia.com. I was responsible to supervise the work of 10 programmers and graphic designers.",
        posicion:"0"
      },
      {
        lugar: "bsTechnology- Codelco",
        img: "assets/img/codelco.jpg",
        descripcion:" Led the analysis, development, training and implementation of the Personnel Performance Evaluation system for the Public mining company of Chile, CODELCO, which had 17,000 employees at that time.",
        posicion:"1"
      }
      
    ];

  constructor() {
    //console.log("Servicio listo");
   }

   getLogros(){
     return this.logros;
    
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
