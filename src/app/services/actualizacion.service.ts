import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ActualizacionService {

  actualizacion: any[]=[];
  objeto:any = {};

  actualizacionUrl: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  getActualizacion() {
    return this.http.get(this.actualizacionUrl + 'productos')
    .map( (resp: any) => {
      this.actualizacion = resp;
      return this.actualizacion;
    });
  }


  addObjeto (objeto) {
    return this.http.post(this.actualizacionUrl + 'productos', objeto)
    .map( (resp: any) => {
      this.objeto = resp;
      return this.objeto;
    });
  }


  delObjeto(objetoid:string) {
    return this.http.delete(this.actualizacionUrl + 'productos/' + objetoid);
  }


  getObjeto(idx: string){
    console.log(" En GET " + this.actualizacionUrl  + " idx=" + idx);
    return this.http.get(this.actualizacionUrl + 'productos/' + idx);
    
  }

  updateObjeto (objeto) {
  console.log(objeto);
    return this.http.put(this.actualizacionUrl + 'productos/' + objeto.id, objeto)
    .map( (resp: any) => {
      this.objeto = resp;
      return this.objeto;
    });
  }
}
