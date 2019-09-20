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
        descripcion:"Visual Basic developments to import and process data generated by Bioanalytical Laboratory Instruments for subsequent analysis and delivery of reports to end users. Trained in GLP (Good Laboratory Practices). ",
        posicion:"1"
      },
      {
        rol: "Sr Programmer",
        img: "assets/img/ba.jpg",
        fecha: "2005 / 2011",
        lugar:"bA Technology",
        modo:"Remote",
        descripcion:"Technology used: ASP, MS Sql Server and Oracle, Javascript, HTML. Analysis and development of a software for Human Resources (Codelco, Chile). Programming, testing and implementation. Develop and facilitate train the training project, including both Headquarters in Santiago Chile and a mine in El Salvador. Once project was completed, I was responsible for the maintenance of the system",
        posicion:"2"
      },
      {
        rol: "Sr Programmer",
        img: "assets/img/solvay.jpg",
        fecha: "2004 / 2005",
        modo:"Office",
        lugar:"Solvay",
        descripcion:"Temporary replacement of an of IT personnel in the HR Area. Main responsibilities were maintenance of database and macro developments in Visual Basic for Excel. ",
        posicion:"3"
      },
      {
        rol: "Sr Programmer",
        img: "assets/img/rhpro.jpg",
        fecha: "2001 / 2004",
        lugar:"Rhpro",
        modo:"Remote",
        descripcion:" Application scheduler for INTRANET. Technology used: ASP, SQLServer, Oracle, Javascript, HTML. Customization of an existing HR management system to meet customers’ requirements. ",
        posicion:"4"
      },
      {
        rol: "Proyect Lider",
        img: "assets/img/technisys.png",
        fecha: "1998/ 2001",
        lugar:"Technisys Informatica SRL",
        modo:"Office",
        descripcion:" Leader of WEB projects. Tasks consisted of interviews with clients, requirements analysis, planning, work team organization and also applications programming. ASP technology, JavaScript, MySQL, MS Sql Server, HTML, XML",
        posicion:"5"
      },
      {
        rol: "Lieutenant - Data Computing Service",
        img: "assets/img/army.jpg",
        fecha: "1996/ 1998",
        lugar:"Argentine Army",
        modo:"Office",
        descripcion:" Development of ammunition inventory stock control applications for the Logistic Support Military Unit Base at Pigue city. ",
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