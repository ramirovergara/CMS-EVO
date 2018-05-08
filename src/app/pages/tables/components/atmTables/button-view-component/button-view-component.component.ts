import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'app-button-view-component',
  templateUrl: './button-view-component.component.html',
  styleUrls: ['./button-view-component.component.scss']
})
export class ButtonViewComponentComponent implements ViewCell, OnInit  {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }

}
