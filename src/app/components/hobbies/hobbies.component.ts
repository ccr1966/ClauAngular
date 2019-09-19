import { Component, OnInit } from '@angular/core';
import { HobbiesService } from '../../services/hobbies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hobbies',
  templateUrl: 'hobbies.component.html'
})
export class HobbiesComponent implements OnInit {

  hobbies:any[] = [];

  constructor( private _hobbiesService:HobbiesService,
 
               private router:Router ) {
  }

  ngOnInit() {
    this.hobbies = this._hobbiesService.getHobbies();

  }

 
}