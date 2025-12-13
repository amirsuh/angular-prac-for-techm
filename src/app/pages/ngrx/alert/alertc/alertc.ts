import { Component } from '@angular/core';
import { selectAlertMessage } from '../../../../store/alert/alert.selector';
import { select, Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { hideAlert } from '../../../../store/alert/alert.action';
@Component({
  selector: 'app-alertc',
  imports: [CommonModule],
  templateUrl: './alertc.html',
  styleUrl: './alertc.scss',
})
export class Alertc {
  alert$

  constructor(private store: Store) {

    this.alert$ = this.store.select(selectAlertMessage);
  }

  close() {
    this.store.dispatch(hideAlert());
  }
}
