import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment, Post } from '../interface/jsonplace.interface';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts():Observable<Post[]>{
   return this.http.get<Post[]>(`${this.apiUrl}/posts`)
  }

  deletePost(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/posts/${id}`)
  }

    // Comments
  getPostComments(postId: number): Observable<Comment[]> {
    let comment = this.http.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`);
    console.log(comment)
    return this.http.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`);
  }
}
