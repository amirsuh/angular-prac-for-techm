import { Component, inject, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder-service';
import { Comment, Post } from '../interface/jsonplace.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jsonplaceholderapi',
  imports: [CommonModule],
  templateUrl: './jsonplaceholderapi.html',
  styleUrl: './jsonplaceholderapi.scss',
})
export class Jsonplaceholderapi implements OnInit{
  loading=false
  jsonPlaceholder = inject(JsonPlaceholderService);
  posts: Post[] = [];
  error: string | null = null;
  selectedPostComments:Comment[]=[]

  ngOnInit() {
   this.loadPosts()
  }

  loadPosts(){
    this.loading = true;
    // old Technique
    //     this.jsonService.getPosts().subscribe((res) => {
    //   console.log(res)
    //   this.posts = res.slice(0, 10);
    // });
    // old Technique End
    this.jsonPlaceholder.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.slice(0, 10); // First 10 posts
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load posts';
        this.loading = false;
      }
    });
  }

    viewComments(postId: number) {
    this.jsonPlaceholder.getPostComments(postId).subscribe({
      next: (comments) => this.selectedPostComments  = comments,
      error: (err) => console.error('Failed to load comments', err)
    });
  }

deletePost(id: number) {
    this.jsonPlaceholder.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter(p =>p.id !== id)
      },
      error: (err) => console.error('Failed to delete post', err)
    });
  }

}
