import { Component } from '@angular/core';

import { AtmTablesService } from './atmTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonViewComponent } from './button-view/button-view.component';

@Component({
  selector: 'atm-tables',
  templateUrl: './atmTables.html',
  styleUrls: ['./atmTables.scss']
})
export class AtmTables {

  query: string = '';
  input: string = '<input type="checkbox" checked></input>';
  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      address: {
        title: 'Dirección',
        type: 'string',
      },
      latitude: {
        title: 'Latitud',
        type: 'string',
      },
      longitude: {
        title: 'Longitud',
        type: 'string',
      },
      bank: {
        title: 'Banco',
        type: 'string',
      },
      ingress: {
        title: 'Ingreso',
        editor: {
          type: 'checkbox'
        },
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: (instance) => {
          instance.change.subscribe(row => {
            let rowCopy = Object.assign({}, row);
            rowCopy.ingress = !rowCopy.ingress;
            this.source.update(row, rowCopy);
          });
        }
      },
      halcash: {
        title: 'Halcash',
        mode: 'external',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: (instance) => {
          instance.change.subscribe(row => {
            let rowCopy = Object.assign({}, row);
            rowCopy.halcash = !rowCopy.halcash;
            this.source.update(row, rowCopy);
          });
        }
      },
      changePin: {
        title: 'PIN',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: (instance) => {
          instance.change.subscribe(row => {
            let rowCopy = Object.assign({}, row);
            rowCopy.changePin = !rowCopy.changePin;
            this.source.update(row, rowCopy);
          });
        }
      }
    }

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: AtmTablesService, private _sanitizer: DomSanitizer) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
