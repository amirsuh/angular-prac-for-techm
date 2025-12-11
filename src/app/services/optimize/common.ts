import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Department, Post, User } from '../../shared/model/common.model';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  private posts: Post[] = [
    { id: 1, title: 'Post One', userId: 1, categoryId: 10 },
    { id: 2, title: 'Post Two', userId: 2, categoryId: 20 },
    { id: 2, title: 'Post Three', userId: 1, categoryId: 10 },
    { id: 2, title: 'Post Four', userId: 2, categoryId: 10 },
  ];

  private categories: Category[] = [
    { id: 10, name: 'Technology' },
    { id: 20, name: 'Science' },
  ];

  private departments: Department[] = [
    { postId: 1, name: 'Engineering' },
    { postId: 2, name: 'Research' },
  ];

  // Get all users
  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  // Get all posts
  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  // Get all categories
  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  // Get a department by post ID
  getDepartmentByPostId(postId: number): Observable<Department | undefined> {
    const department = this.departments.find((d) => d.postId === postId);
    return of(department);
  }
}
