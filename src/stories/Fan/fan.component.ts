import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Bar',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.scss'],
})
export class FanComponent {
  @Input('data') data: any;
  constructor() {}
}
