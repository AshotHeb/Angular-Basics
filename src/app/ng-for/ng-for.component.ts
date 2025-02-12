import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss',
})
export class NgForComponent {
  posts = [
    {
      title: 'Post 1',
      content: 'Content 1',
      comments: ['Comment 1', 'Comment 2'],
    },
    {
      title: 'Post 2',
      content: 'Content 2',
      comments: ['Comment 1', 'Comment 2'],
    },
    {
      title: 'Post 3',
      content: 'Content 3',
      comments: ['Comment 1', 'Comment 2'],
    },
  ];
}
