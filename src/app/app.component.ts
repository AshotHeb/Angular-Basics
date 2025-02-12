import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EventListenersComponent } from './event-listeners/event-listeners.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FirstComponentComponent,
    EventListenersComponent,
    TwoWayBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgSwitchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-basics';
}
