import { Component } from '@angular/core';

@Component({
  selector: 'app-event-listeners',
  imports: [],
  templateUrl: './event-listeners.component.html',
  styleUrl: './event-listeners.component.scss',
})
export class EventListenersComponent {
  inputValue: string = '';

  onKeyUp(event: any) {
    this.inputValue = event.target.value;
  }

  onBlur(value: string) {
    this.inputValue = value;
  }
}
