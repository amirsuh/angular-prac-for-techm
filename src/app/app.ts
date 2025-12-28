import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { Store } from '@ngrx/store';
import { kiranaGrocAction } from './pages/ngrx-kirana/store/actions/kiranagrocery.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-prac-for-techm');
  constructor(private store:Store<{kiranagorcery:any[]}>){
    this.store.dispatch(kiranaGrocAction.loadKiranaGrocery())
  }

}
