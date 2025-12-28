import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KiranaGroceryModel } from '../../models/kiranagrocery.model';
import {
  addtoKiranaBucket,
  removeFromKiranaBucket,
} from '../../store/actions/kiranagrocery.action';

@Component({
  selector: 'app-kirana-grocery',
  imports: [CommonModule],
  templateUrl: './kirana-grocery.html',
  styleUrl: './kirana-grocery.scss',
})
export class KiranaGrocery {
  kiranaGroceyList$?: Observable<KiranaGroceryModel[]>;
  constructor(private store: Store<{ kiranaGorcery: KiranaGroceryModel[] }>) {
    this.kiranaGroceyList$ = store.select('kiranaGorcery');
  }

  increment(data: KiranaGroceryModel) {
    const payload = {
      id: data.id,
      name: data.name,
      category: data.category,
      price: data.price,
      unit: data.unit,
      stock: data.stock,
      brand: data.brand,
      isAvailable: data.isAvailable,
      quantity: 1,
    };
    // this.store.dispatch({type:"Update",payload:payload})
    this.store.dispatch(addtoKiranaBucket({ payload }));
  }
  decrement(data: KiranaGroceryModel) {
    const payload = {
      id: data.id,
    };

    this.store.dispatch(removeFromKiranaBucket({ payload }));
  }
}
