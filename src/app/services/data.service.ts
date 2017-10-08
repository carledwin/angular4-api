import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service connected...');
   }

   getPosts(){
     console.log('getPosts....');
     return this.http
            .get('http://jsonplaceholder.typicode.com/posts')
            .map(resp => resp.json());
     
   }

}
