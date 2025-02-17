import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PostsComponent implements OnChanges, OnInit {
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

  constructor() {
    // console.log('LifeCycle Hooks Calls');
    // console.log('constructor');
  }
  deletePost(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Կանչվում է դրսի տվյալի փոփոխման դեպքում
    // Այս կոմպոնենտում չի աշխատի ,քանի որ չունենք դրսից եկող ոչ մի տվյալ
    // console.log('PostsComponent -- ngOnChanges', changes);
  }

  ngOnInit() {
    // Կանչվում է կոմպոնենտի լոգիկական մասը պատրաստ է ,componentDidMount-ի նման React-ի
    // console.log('PostsComponent -- ngOnInit');
  }

  ngDoCheck() {
    // Աշխատում է կոմպոնենտի ամեն մի փոփոխության դեպքում (componentDidUpdate-ի նման React-ի)
    console.log('PostsComponent -- ngDoCheck');
  }

  ngAfterViewInit() {
    //Աշխատում է երբ արդեն կոմպոնենտը երևւմ է էկրանին
    // console.log('PostsComponent -- ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // Երբ կոմպոնենտի տեսանելի մասը update է լինում ,այդ ժամանակ այս մեթոդն է կանչվում
    // console.log('PostsComponent -- ngAfterViewChecked');
  }
}
