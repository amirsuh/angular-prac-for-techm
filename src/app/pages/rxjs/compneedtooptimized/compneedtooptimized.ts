import { Component, inject } from '@angular/core';
import { CommonService } from '../../../services/optimize/common';
import { Post } from '../../../shared/model/common.model';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compneedtooptimized',
  imports: [CommonModule],
  templateUrl: './compneedtooptimized.html',
  styleUrl: './compneedtooptimized.scss',
})
export class Compneedtooptimized {
  commonService = inject(CommonService);
  posts: Post[] = [];
  selectedPost!: Post;
  apiUsers = this.commonService.getUsers();
  apiPosts = this.commonService.getPosts();
  apiCategories = this.commonService.getCategories();
  posts$: Observable<Post[]> = forkJoin({
    apiUsers: this.apiUsers,
    apiPosts: this.apiPosts,
    apiCategories: this.apiCategories,
  }).pipe(
    map((res) => {
      //console.log(res);
      let users = res.apiUsers;
      let posts = res.apiPosts;
      let categories = res.apiCategories;
      return posts.map((post) => {
        const user = users.find((u) => u.id === post.userId);
        const category = categories.find((c) => c.id === post.categoryId);

        return {
          ...post,
          userName: user?.name ?? 'Unknown',
          categoryName: category?.name ?? 'Uncategorized',
        };
      });
    })
  );
  selectedPost$!: Observable<Post>;

  viewPost(post: Post) {
    if (post.id) {
      // Get department for the selected post

      this.selectedPost$ = this.posts$.pipe(
        switchMap((post: any) =>
          this.commonService.getDepartmentByPostId(post.id).pipe(
            map((department) => ({
              ...post,
              departmentName: department?.name ?? 'Unknown', // Add default fallback if department is not found
            }))
          )
        )
      );
    }
  }
}
