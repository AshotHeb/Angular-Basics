import { Component, Input } from '@angular/core';
import { Post } from '../posts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  // ! is the required operator
  @Input() post!: Post;
}
