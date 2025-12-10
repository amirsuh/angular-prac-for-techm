import { Component } from '@angular/core';
import { User } from "../user/user";
import { Admin } from "../admin/admin";

@Component({
  selector: 'app-main',
  imports: [User, Admin],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
counter:number=0


incrementCounter(){
  this.counter++
}
decrmentCounter(){
this.counter--
}
}
