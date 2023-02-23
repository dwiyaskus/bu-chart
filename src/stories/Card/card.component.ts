import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styles: [
    `
      :host {
        text-align: center;
        background: white;
        display: block;
        padding: 0.45rem 0.65rem;
        border-radius: 3px;
        max-width: '100%';
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
      h2 {
        color: #c85f7f;
      }

      p {
        text-align: center;
      }
    `,
  ],
})
export class CardComponent {
  @Input('title') title: string = '';
  @Input('subtitle') subtitle: string = '';
  @Input('content') content: string = '';
  @Output() btnClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  handleBtnClick = () => {
    this.btnClicked.emit();
  };
}
