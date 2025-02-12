import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss',
})
export class NgIfComponent {
  isBlueParagraph = true;
}
