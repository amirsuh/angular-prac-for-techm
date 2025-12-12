import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IAppState } from '../../../store/store';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
count$ : Observable<number>

constructor(private store:Store<IAppState>){
  this.count$ =  this.store.pipe(select('count'))
}
}
