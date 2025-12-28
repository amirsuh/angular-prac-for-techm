import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KiranaService {
  private http =inject(HttpClient)
  fetchAllGroceries(){
    return this.http.get("http://localhost:5002/groceries")
  }
}
