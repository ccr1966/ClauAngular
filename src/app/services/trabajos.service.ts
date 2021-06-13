//claudia cecilia rossi
import { Injectable } from '@angular/core';

@Injectable()
export class TrabajosService {

  private trabajos:any[]= [
      {
        rol: "Sr Programmer",
        img: "assets/img/iaca.jpg",
        fecha: "2012 / 2014",
        lugar:"IACA Laboratorios",
        modo:"Office",
        descripcion:"I Developed, with VisualBasic language, programs to fulfill requirements of Biologists and Biochemists, for the bioanalytical area. The programs took data from a XEVO TQ MS Waters system and generated the reports to be shown in ANMAT (National Administration of Medicines, Food and Medical Technology of Argentina). Trained in GLP (Good Laboratory Practices). ",
        posicion:"1"
      },
      {
        rol: "Sr Programmer",
        img: "assets/img/ba.jpg",
        fecha: "2005 / 2011",
        lugar:"bA Technology",
        modo:"Remote",
        descripcion:"Remote position. Technology used: ASP, MS Sql Server 7.0, Oracle, JavaScript, HTML. Analysis and development of a Human Resources software for the government mine Codelco, Chile. Programming, testing and implementation. Develop and facilitate train the training project, including both Headquarters in Santiago Chile and a mine in El Salvador. Once project was completed, I was responsible for the maintenance of the system.",
        posicion:"2"
      },
      {
        rol: "Sr Programmer",
        img: "assets/img/solvay.jpg",
        fecha: "2004 / 2005",
        modo:"Office",
        lugar:"Solvay",
        descripcion:"Temporary replacement of an IT personnel in the HR Area. Main responsibilities were maintenance of database and macro developments in Visual Basic for Excel.",
        posicion:"3"
      },
      {
        rol: "Sr Programmer",
        img: "assets/img/rhpro.jpg",
        fecha: "2001 / 2004",
        lugar:"Rhpro",
        modo:"Remote",
        descripcion:"Customization an existing Human Resources management system to meet customers’ requirements. Technology used: ASP, MS SQL Server, Oracle, Javascript, HTML.",
        posicion:"4"
      },
      {
        rol: "Proyect Lider",
        img: "assets/img/technisys.png",
        fecha: "1998/ 2001",
        lugar:"Technisys Informatica SRL",
        modo:"Office",
        descripcion:"Leader of WEB projects. Tasks consisted of interviews with clients, requirements analysis, planning, work team organization and also applications programming. ASP technology, JavaScript, MySQL, MS Sql Server, HTML, XML. As project manager, led a multidisciplinary team responsible for the first banking WEB site in Argentina: www.e-galicia.com. I was responsible to supervise the work of 10 programmers and graphic designers.",
        posicion:"5"
      },
      {
        rol: "Lieutenant - Data Computing Service",
        img: "assets/img/army.jpg",
        fecha: "1996/ 1998",
        lugar:"Argentine Army",
        modo:"Office",
        descripcion:"Development of ammunition inventory stock control applications for the Logistic Support Military Unit Base at Pigue city.",
        posicion:"6"
      },
  {
        rol: "Programmer",
        img: "assets/img/blank.jpg",
        fecha: "1994/ 1996",
        lugar:"Systems Solutions",
        modo:"Remote",
        descripcion:"Remote position. Programmer in the 4th generation Progress languaje. Manteinance and customizations of the Magnus Datasul system. Afterward migrated to Progress 7 and higher ones, consequently changing the paradigm to event-driven programming.",
        posicion:"6"
      },
  {
        rol: "Assistant Professor",
        img: "assets/img/uns.jpg",
        fecha: "1992/ 1996",
        lugar:"Universidad Nacional del Sur",
        modo:"Office",
        descripcion:"Assistant Professor A (graduate) in the following courses: Introduction to Computing, Data Processing, Algorithm Structures and Programming Languaje",
        posicion:"6"
      }

    ];

  constructor() {
    //console.log("Servicio listo");
   }

   getTrabajos(){
     return this.trabajos;
    
   }

   getTrabajo(idx: string){
     return this.trabajos[idx];
     
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
