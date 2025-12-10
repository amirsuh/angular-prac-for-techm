import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  showChild = true;
  count = 0;
  childName = 'Angular';

  toggleChild() {
    this.showChild = !this.showChild;
  }
  increment(){
    this.count++
  }
}
