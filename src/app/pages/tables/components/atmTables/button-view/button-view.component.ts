import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent implements ViewCell, OnInit {

  renderValue: string = 'FALSE';

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() change: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onChange() {
    if (this.renderValue === 'FALSE') {
      this.renderValue = 'TRUE';
    } else {
      this.renderValue = 'FALSE';
    }
    this.change.emit(this.renderValue);
  }
}
