export interface User {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Department {
  postId: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  userId: number;
  categoryId: number;
  userName?: string;
  categoryName?: string;
  departmentName?: string;
}

// export type FreezedPost = Post;
export type FreezedPost = Readonly<Post>;
export type FreezedPostOptional = Partial<Post>;

const post: Post = { id: 1, title: 'My First Post', userId: 1, categoryId: 1 };
const postId = getValue(post, 'id'); //valid
const postCreatedDate = getValue(post, 'createdDate'); //invalid
function getValue(obj: any, key: string): any {
  return obj[key];
}
