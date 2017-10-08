import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address: Address; 
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit:boolean = false;
  // address:{
    //   street:string,
    //   city: string,
    //   state:string
    // };
    
  // hobbies: any[];

  constructor(private dataService: DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Carl Edwin';
    this.age = 34;
    this.email = 'carlinstr@gmail.com';
    this.address = {
      street: 'Rua do Bosque 23',
      city: 'Guarulhos',
      state: 'SP'
    };
    this.hobbies = ['Write code', 'Watch TV', 'Listen to music'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe(
                                          (posts) => {
                                            console.log(posts);
                                            this.posts = posts;
                                          });
  }

  onClick(){
    this.name = 'Brad Traversy';
    this.hobbies.push('New hobbi');
    console.log('Hello');
  }

  addHobby(hobby){
    console.log(hobby );
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log();
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
  
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}