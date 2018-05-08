import { Component } from '@angular/core';

import { AtmTablesService } from './atmTables.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'atm-tables',
  templateUrl: './atmTables.html',
  styleUrls: ['./atmTables.scss']
})
export class AtmTables {

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
      deposit: {
        title: 'Ingreso',
        type: 'checkbox',
      },
      halcash: {
        title: 'Halcash',
        type: 'checkbox',
      },
      pin: {
        title: 'PIN',
        type: 'checkbox',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: AtmTablesService) {
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
