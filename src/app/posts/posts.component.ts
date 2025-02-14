import { Component } from '@angular/core';
import { PostInputComponent } from './post-input/post-input.component';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';

export interface Post {
  title: string;
  content: string;
  id: number;
}

@Component({
  selector: 'app-posts',
  imports: [CommonModule, PostInputComponent, PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts: Post[] = [
    {
      title: 'First Post',
      content: 'This is the first post',
      id: 1,
    },
    {
      title: 'Second Post',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos',
      id: 2,
    },
  ];

  addPost(post: Post) {
    this.posts.push(post);
  }
}
