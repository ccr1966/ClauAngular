import { Component, OnInit } from '@angular/core';
import { LogrosService } from '../../services/logros.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logros',
  templateUrl: 'logros.component.html'
})
export class LogrosComponent implements OnInit {

  logros:any[] = [];

  constructor( private _logrosService:LogrosService,
               private router:Router ) {
  }

  ngOnInit() {
    this.logros= this._logrosService.getLogros();

  }

}