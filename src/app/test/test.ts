import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
counter:number = 0

increment(){
  this.counter++
}
deccrement(){
  this.counter--
}
reset(){
  this.counter=0
}
}
