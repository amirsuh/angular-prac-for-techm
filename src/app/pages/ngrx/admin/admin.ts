import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IAppState } from '../../../store/store';

@Component({
  selector: 'app-admin',
  imports: [AsyncPipe],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
count$ : Observable<number>

constructor(private store:Store<IAppState>){
  this.count$ =  this.store.pipe(select('count'))
}
}
