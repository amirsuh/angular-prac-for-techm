import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, shareReplay } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IAppState } from '../../../store/store';
import { hideAlert, showAlert } from '../../../store/alert/alert.action';
import { selectAlertMessage } from '../../../store/alert/alert.selector';
import { changeColorOnHoverDirective } from '../../../shared/directives/hover.directive';
import { HoverColorDirective } from '../../../shared/directives/hovercolor.directive';
import { HttpClient } from '@angular/common/http';
import { CallHijri } from "../../hijri/call-hijri/call-hijri";

@Component({
  selector: 'app-admin',
  imports: [AsyncPipe, CommonModule, changeColorOnHoverDirective, HoverColorDirective],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
count$ : Observable<number>
message$
message = 'Hover over me!';
private userDetailCache = new Map<number, Observable<any>>();
constructor(private store:Store<IAppState>,private http:HttpClient){
  this.count$ =  this.store.pipe(select('count'))
   this.message$ = this.store.select(selectAlertMessage);

}
getCacheUserId(id: number )  {
    if (!this.userDetailCache.has(id)) {
      const product$ = this.http.get("https://jsonplaceholder.typicode.com/users/"+ id).pipe(
        shareReplay(1)
      );
      this.userDetailCache.set(id, product$);
    }
    return this.userDetailCache.get(id)!;
  }
callalert(){
  debugger
  this.store.dispatch(showAlert({ message: 'Saved Successfully!' }));
}

  // type$ = this.store.select(selectAlertType);
  // visible$ = this.store.select(selectAlertVisible);


  triggerAlert() {
    this.store.dispatch(
      showAlert({
        message: 'This is an NgRx alert!',
        //alertType: 'success'
      })
    );
  }

  closeAlert() {
    this.store.dispatch(hideAlert());
  }
}
