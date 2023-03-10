import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ConectapiService {

  posts: any[]=[];
  post:any = {};

  postsUrl: string = 'http://localhost:3000/trabajos';
  /*postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'; */
  constructor(public http: HttpClient) { }

  getPosts() {
    return this.http.get(this.postsUrl)
    .map( (resp: any) => {
      this.posts = resp;
      return this.posts;
    });
  }

}
