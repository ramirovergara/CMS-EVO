import { Component } from '@angular/core';

import { OfficeTablesService } from './officeTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonViewComponent } from '../atmTables/button-view/button-view.component';


@Component({
  selector: 'office-tables',
  templateUrl: './officeTables.html',
  styleUrls: ['./officeTables.scss'],
})
export class OfficeTables {

  query: string = '';

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
      name: {
        title: 'Nombre',
        type: 'string',
      },
      address: {
        title: 'Dirección',
        type: 'string',
      },
      postalCode: {
        title: 'Código Postal',
        type: 'string',
      },
      phone: {
        title: 'Teléfono',
        type: 'string',
      },
      longitude: {
        title: 'Longitud',
        type: 'number',
      },
      latitude: {
        title: 'Latitud',
        type: 'number',
      },
      ingress: {
        title: 'Ingreso',
        editor: {
          type: 'checkbox',
        },
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: (instance) => {
          instance.change.subscribe(row => {
            const rowCopy = Object.assign({}, row);
            rowCopy.ingress = !rowCopy.ingress;
            this.source.update(row, rowCopy);
          });
        },
      },
      halcash: {
        title: 'Halcash',
        mode: 'external',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: (instance) => {
          instance.change.subscribe(row => {
            const rowCopy = Object.assign({}, row);
            rowCopy.halcash = !rowCopy.halcash;
            this.source.update(row, rowCopy);
          });
        },
      },
      changePin: {
        title: 'PIN',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: (instance) => {
          instance.change.subscribe(row => {
            const rowCopy = Object.assign({}, row);
            rowCopy.changePin = !rowCopy.changePin;
            this.source.update(row, rowCopy);
          });
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  offices: any;

  constructor(protected service: OfficeTablesService, private _sanitizer: DomSanitizer) {
    this.service.getOffices().subscribe(data => {
      this.offices = data;
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
