import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-ts',
  imports: [],
  templateUrl: './learn-ts.html',
  styleUrl: './learn-ts.scss',
})
export class LearnTs {

  constructor() {
    let firstName: string = 'Alice';
    let greeting: string = `Hello, ${firstName}`; // Using
    //template literals
    console.log(greeting); // Output: Hello, Alice

    let age: number = 24;
    let pi: number = 3.14;
    console.log(age, pi); // Output: 24 3.14

    let isLoggedIn: boolean = true;
    console.log(isLoggedIn); // Output: true

    let numbers: Array<number> = [1, 2, 3];
    console.log(numbers); // Output: [1, 2, 3]

    let names: string[] = ['Alice', 'Bob'];
    console.log(names); // Output: ["Alice", "Bob"]
    let user: [string, number, boolean] = ['Alice', 24, false];
    console.log(user); // Output: ["Alice", 24]

    enum Color {
      Red,
      Green,
      Blue,
    }
    let myColor: Color = Color.Green;
    console.log(myColor); // Output: 1 (index of Green in the enum)

    let value: any = 'Hello';
    value = 42; // Allowed
    value = true;
    console.log(value); // Output: 42

    let valueu: unknown = 'Hello';
    //value.toUpperCase(); // Error: Object is of type 'unknown'
    if (typeof valueu === 'string') {
      // console.log(value.toUpperCase()); // Output: HELLO
    }
    this.logMessage('Hello, TypeScript!');

    let valueq: null = null;
    let anotherValue: undefined = undefined;
    console.log(valueq, anotherValue);
    // this.throwError('test')
    let user2: User = {
      name: 'Amit',
      age: 25,
      isActive: false,
      // email is optional, so we can skip it
    };
    console.log(user2);

    let user3: Users = {
      id: 101,
      name: 'Kiran',
      age: 26,
    };
    //user3.id=1
    let sayHello: Greet = function (name: string) {
      return `Hello, ${name}!`;
    };
    console.log(sayHello('Amir'));

    let employee1: Employee = {
      name: 'John',
      age: 30,
      employeeId: 1234,
    };
    console.log(employee1);

  }
 interactWithPet(pet: Cat | Dog): void {
 if (pet.type === "cat") {
 pet.meow();
 } else {
 pet.bark();
 }
}
  logMessage(message: string): void {
    console.log(message);
  }

  throwError(message: string): never {
    throw new Error(message);
  }
}
interface User {
  name: string;
  age: number;
  isActive: boolean;
  email?: string; // Optional property
}
interface Users {
  readonly id: number;
  name: string;
  age: number;
}
interface Greet {
  (name: string): string;
}
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  employeeId: number;
}
interface Cat {
  type: 'cat';
  meow: () => void;
}
interface Dog {
  type: 'dog';
  bark: () => void;
}
