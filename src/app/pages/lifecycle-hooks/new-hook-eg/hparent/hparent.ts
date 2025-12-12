import { Component } from '@angular/core';
import { Hchild } from "../hchild/hchild";

@Component({
  selector: 'app-hparent',
  imports: [Hchild],
  templateUrl: './hparent.html',
  styleUrl: './hparent.scss',
})
export class Hparent {
parentData = 'Initial Data';
parentCount:number=0
  updateData() {
    this.parentData = `Updated at ${new Date().toLocaleTimeString()}`;
  }

  clikcCount(){
    this.parentCount++
  }
}
