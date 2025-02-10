import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss',
})
export class NgClassComponent {
  className: string = 'circle';
  secondVariantIsCircle: boolean = true;
}
