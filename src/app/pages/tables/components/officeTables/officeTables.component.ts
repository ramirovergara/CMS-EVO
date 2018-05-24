import { Component, OnInit } from '@angular/core';

import { OfficeTablesService } from './officeTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonViewComponent } from '../atmTables/button-view/button-view.component';
import swal from 'sweetalert2';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'office-tables',
  templateUrl: './officeTables.html',
  styleUrls: ['./officeTables.scss'],
})
export class OfficeTables implements OnInit {

  query: string = '';
  source: LocalDataSource = new LocalDataSource();
  offices: any;

  constructor(protected service: OfficeTablesService, 
    private _sanitizer: DomSanitizer,
    private dragula: DragulaService) {
    this.service.getOffices().subscribe(data => {
      this.offices = data;
    });
  }

  ngOnInit() {
    this.dragula.drag.subscribe(value => {
      console.log(value);
    });
  }

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
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

  onCreateConfirm(event): void {
    swal({
      title: '¿Está seguro?',
      text: 'La oficina se creará con los campos introducidos',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#ff0075',
      cancelButtonColor: '#000',
      confirmButtonText: 'Crear',
    }).then((result) => {
      if (result.value) {
        this.service.createOffice(event).subscribe(data => {
          swal(
            'Creado',
            'La oficina ha sido creada',
            'success',
          );
        });
      }
    });
  }

  onEditConfirm(event): void {
    swal({
      title: '¿Está seguro?',
      text: 'La oficina se guardará con los cambios realizados',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#ff0075',
      cancelButtonColor: '#000',
      confirmButtonText: 'Actualizar',
    }).then((result) => {
      if (result.value) {
        this.service.putOffice(event).subscribe(data => {
          swal(
            'Actualizado',
            'La oficina ha sido actualizada',
            'success',
          );
        });
      }
    });
  }

  onDeleteConfirm(event): void {
    swal({
      title: '¿Está seguro?',
      text: 'La oficina se borrará',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#ff0075',
      cancelButtonColor: '#000',
      confirmButtonText: 'Borrar',
    }).then((result) => {
      if (result.value) {
        this.service.deleteOffice(event.data.id).subscribe(data => {
          swal(
            'Borrado',
            'La oficina ha sido borrada',
            'success',
          );
        });
      }
    });
  }
}
