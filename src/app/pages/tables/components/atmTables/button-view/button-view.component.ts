import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent implements ViewCell, OnInit {

  renderValue: string = 'NO';

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() change: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onChange() {
    if (this.renderValue ==='NO') {
      this.renderValue = 'YES';
    } else {
      this.renderValue = 'NO';
    }

    this.change.emit(this.renderValue);
  }
}
