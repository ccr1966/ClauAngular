import { Component, OnInit } from '@angular/core';
import { TrabajosService } from '../../services/trabajos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trabajos',
  templateUrl: 'trabajos.component.html'
})
export class TrabajosComponent implements OnInit {

  trabajos:any[] = [];

  constructor( private _trabajosService:TrabajosService,
               private router:Router ) {
  }

  ngOnInit() {
    this.trabajos = this._trabajosService.getTrabajos();

  }

  verTrabajo(idx:number){
    console.log('ver heroe de heroeS.ts' );
    this.router.navigate(['/trabajo',idx]);
  }

 
}