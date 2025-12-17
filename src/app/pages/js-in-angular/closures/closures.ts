import { Component } from '@angular/core';
import { Master } from '../../../services/master';

@Component({
  selector: 'app-closures',
  imports: [],
  templateUrl: './closures.html',
  styleUrl: './closures.scss',
})
export class Closures {
  count = 0;
users: any[] = [];

    // Alternative: Explicit binding in constructor
  constructor(private userService: Master) {
    this.handleClick = this.handleClick.bind(this);
  }
  // Closure captures the component's 'this' context
  increment() {
    setTimeout(() => {
      // Arrow function maintains 'this' binding (closure over 'this')
      this.count++;
    }, 1000);
  }

   // Practical closure example: Factory pattern
  createMultipleCounters() {
    const counters = [];
    for (let i = 0; i < 3; i++) {
      // Each counter closes over its own 'i' value
      counters.push(() => console.log(`Counter ${i}`));
    }
    counters.forEach(counter => counter()); // Outputs: 0, 1, 2
  }


  // WRONG: 'this' will be undefined in setTimeout with regular function
  loadUsersWrong() {
    setTimeout(function() {
      // this.users is undefined here!
      // this.users = []; // ERROR
    }, 1000);
  }

  // CORRECT: Arrow function maintains 'this' binding
  loadUsers() {
    setTimeout(() => {
      this.users = this.userService.getUsers();
    }, 1000);
  }

  // For template event binding, always use arrow functions or bind
  handleClick = () => {
    console.log(this.users); // 'this' is correct
  }


}
