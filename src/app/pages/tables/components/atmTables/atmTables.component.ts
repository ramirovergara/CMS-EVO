import { Component } from '@angular/core';

import { AtmTablesService } from './atmTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';

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
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'Dirección',
        type: 'string'
      },
      lastName: {
        title: 'Latitud',
        type: 'string'
      },
      username: {
        title: 'Longitud',
        type: 'string'
      },
      email: {
        title: 'Banco',
        type: 'string'
      },
      age: {
        title: 'Ingreso',
        type: 'number',
        editor: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
          }
        }
      },
      halcash: {
        title: 'Halcash',
        editor: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
          }
        }
      },
      pin: {
        title: 'PIN',
        editor: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
          }
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
