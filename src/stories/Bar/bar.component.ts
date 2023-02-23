import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  @Input('title') title: string = '';
  constructor() {}
}
