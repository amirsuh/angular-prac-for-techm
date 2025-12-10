import { Component } from '@angular/core';
import { Parent } from "../parent/parent";

@Component({
  selector: 'app-lifecycle',
  imports: [Parent],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.scss',
})
export class Lifecycle {

}
