import { Component, OnInit } from '@angular/core';
import { EstudiosService } from '../../services/estudios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estudios',
  templateUrl: 'estudios.component.html'
})
export class EstudiosComponent implements OnInit {

  estudios:any[] = [];

  constructor( private _estudiosService:EstudiosService,
               private router:Router ) {
  }

  ngOnInit() {
    this.estudios = this._estudiosService.getEstudios();

  }

  verEstudio(idx:number){
    console.log('ver heroe de heroeS.ts' );
    this.router.navigate(['/estudio',idx]);
  }

 
}