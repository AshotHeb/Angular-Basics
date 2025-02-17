import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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

  @ContentChild('postMessage') postMessage!: ElementRef;
  @Output() deletePost = new EventEmitter<Post>();

  ngAfterContentInit() {
    // Երբ կոմպոնենտը ստանում է դրսից content (children in React) և ավարտվում է այդ content-ի նկարվելը DOM-ի մեջ,կանչվում է այս մեթոդը
    // console.log(this.postMessage.nativeElement);
    console.log('PostComponent -- ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // Երբ այդ content-ը update է լինում ,այդ ժամանակ այս մեթոդն է կանչվում
    console.log('PostComponent --  ngAfterContentChecked');
  }

  ngOnDestroy() {
    // Երբ կոմպոնենտը ջնջվում է ,այդ ժամանակ այս մեթոդն է կանչվում
    console.log('PostComponent --  ngOnDestroy');
  }
}
