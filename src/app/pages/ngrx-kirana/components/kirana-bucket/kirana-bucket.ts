import { Component } from '@angular/core';
import { KiranaBucketModel } from '../../models/kiranabucket.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kirana-bucket',
  imports: [CommonModule],
  templateUrl: './kirana-bucket.html',
  styleUrl: './kirana-bucket.scss',
})
export class KiranaBucket {

  kiranaBucketData$?:Observable<KiranaBucketModel[]>
  constructor(private store:Store<{kiranaBucket:KiranaBucketModel[]}>){
    this.kiranaBucketData$ = this.store.select("kiranaBucket")
  }
}
