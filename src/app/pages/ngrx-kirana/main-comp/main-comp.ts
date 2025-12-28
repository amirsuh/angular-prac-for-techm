import { Component } from '@angular/core';
import { KiranaGrocery } from "../components/kirana-grocery/kirana-grocery";
import { KiranaBucket } from "../components/kirana-bucket/kirana-bucket";

@Component({
  selector: 'app-main-comp',
  imports: [KiranaGrocery, KiranaBucket],
  templateUrl: './main-comp.html',
  styleUrl: './main-comp.scss',
})
export class MainComp {

}
