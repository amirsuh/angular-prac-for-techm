import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {
  counter$:Subject<boolean> = new Subject<boolean>()
  users:any=[{
    id:0,
    name:'test',
    address:'test'
  },{
    id:1,
    name:'test1',
    address:'test1'
  },{
    id:2,
    name:'test2',
    address:'test2'
  }]

  getUsers(){
    return this.users
  }
}
