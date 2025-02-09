import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EventListenersComponent } from './event-listeners/event-listeners.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent, EventListenersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-basics';
}
