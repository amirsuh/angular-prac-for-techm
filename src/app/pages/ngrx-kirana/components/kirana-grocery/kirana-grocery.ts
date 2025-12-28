import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KiranaGroceryModel } from '../../models/kiranagrocery.model';
import {
  addtoKiranaBucket,
  removeFromKiranaBucket,
} from '../../store/actions/kiranabucket.action';
import { selectKiranaGroc, selectKiranaGrocByTpe } from '../../store/selector/kiranaGroc.selector';

@Component({
  selector: 'app-kirana-grocery',
  imports: [CommonModule],
  templateUrl: './kirana-grocery.html',
  styleUrl: './kirana-grocery.scss',
})
export class KiranaGrocery {
  kiranaGroceyList$?: Observable<KiranaGroceryModel[]>;
  filteredkiranaGroceyList$?: Observable<KiranaGroceryModel[]>;
  filterData = ['Rice & Grains','Pulses','Oil & Ghee','Dairy','Vegetables','Fruits','Spices','Snacks']
  constructor(private store: Store<{ kiranaGorcery: KiranaGroceryModel[] }>) {
    this.kiranaGroceyList$ = store.select(selectKiranaGroc);
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
  onTypeChanged(event:Event){
    const elem = (event.target as HTMLSelectElement).value
     if(elem) this.filteredkiranaGroceyList$ = this.store.select(selectKiranaGrocByTpe(elem))
    else this.filteredkiranaGroceyList$=undefined
    // this.store.select(selectKiranaGrocByTpe(elem))
  }
}
