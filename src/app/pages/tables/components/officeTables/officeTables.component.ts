import { Component } from '@angular/core';

import { OfficeTablesService } from './officeTables.service';
import { LocalDataSource } from 'ng2-smart-table';

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
      address: {
        title: 'Dirección',
        type: 'string',
      },
      latitude: {
        title: 'Latitud',
        type: 'number',
      },
      longitude: {
        title: 'Longitud',
        type: 'number',
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
  offices: any;

  constructor(protected service: OfficeTablesService) {
    this.service.getOffices().subscribe(data => {
      this.offices = data;
      console.log(this.offices);
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
