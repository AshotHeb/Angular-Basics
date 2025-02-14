import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../posts.component';
@Component({
  selector: 'app-post-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss',
})
export class PostInputComponent {
  @Output() postAdded = new EventEmitter<Post>();
  // This like React's ref // Սա պարտադիր պետք է անել այն կոմպոնենտի մեջ, որտեղ #postTitleInput գտնվում է
  @ViewChild('postTitleInput', { static: false }) postTitleInput!: ElementRef;

  title = '';
  content = '';

  addPost() {
    const post: Post = {
      title: this.title,
      content: this.content,
      id: Math.floor(Math.random() * 5000),
    };

    //Empty Inputs case
    if (post.title.trim() === '' || post.content.trim() === '') {
      return;
    }

    this.postAdded.emit(post);
    this.content = this.title = '';
  }

  onFocusPostTitleInput() {
    this.postTitleInput.nativeElement.focus();
  }
}
