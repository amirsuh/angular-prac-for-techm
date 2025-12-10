import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {
  counter$:Subject<boolean> = new Subject<boolean>()
}
