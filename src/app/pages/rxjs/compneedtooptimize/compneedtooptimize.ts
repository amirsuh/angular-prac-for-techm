import { Component, inject } from '@angular/core';
import { CommonService } from '../../../services/optimize/common';
import { Post } from '../../../shared/model/common.model';
import { forkJoin, map, Observable } from 'rxjs';

@Component({
  selector: 'app-compneedtooptimize',
  imports: [],
  templateUrl: './compneedtooptimize.html',
  styleUrl: './compneedtooptimize.scss',
})
export class Compneedtooptimize {
  commonService = inject(CommonService);
  posts: Post[] = [];
  selectedPost!: Post;

  ngOnInit(): void {
    const apiUsers = this.commonService.getUsers();
    const apiPosts = this.commonService.getPosts();
    const apiCategories = this.commonService.getCategories();

    forkJoin({ apiUsers: apiUsers, apiPosts: apiPosts, apiCategories: apiCategories })
      .pipe(
        map((res) => {
          console.log(res);
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
      )
      .subscribe((res) => {
        this.posts = res;
      });
    // Get users from CommonService
    // this.commonService.getUsers().subscribe((users) => {
    //   // Get posts from CommonService
    //   this.commonService.getPosts().subscribe((posts) => {
    //     // Get categories from CommonService
    //     this.commonService.getCategories().subscribe((categories) => {
    //       // Enrich posts with userName and categoryName
    //       this.posts = posts.map((post) => {
    //         const user = users.find((u) => u.id === post.userId);
    //         const category = categories.find((c) => c.id === post.categoryId);

    //         return {
    //           ...post,
    //           userName: user?.name ?? 'Unknown',
    //           categoryName: category?.name ?? 'Uncategorized',
    //         };
    //       });
    //     });
    //   });
    // });
  }

  viewPost(post: Post) {
    if (post.id) {
      // Get department for the selected post

      this.commonService.getDepartmentByPostId(post.id).subscribe((department) => {
        this.selectedPost = {
          ...post,
          departmentName: department?.name,
        };
      });
    }
  }

  ngOnDestroy() {}
}
