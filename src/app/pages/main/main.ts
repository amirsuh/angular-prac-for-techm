import { Component } from '@angular/core';
import { User } from "../user/user";
import { Admin } from "../admin/admin";
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../store/counter.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [User, Admin,AsyncPipe],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
counter:number=0
counters$:Observable<number>;

constructor(private store:Store<IAppState>){
  this.counters$ = this.store.pipe(select('count'))
}
incrementCounter(){
  // this.counter++
  this.store.dispatch(increment())
}
decrmentCounter(){
// this.counter--
this.store.dispatch(decrement())
}
}
