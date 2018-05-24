import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { HotTable, HotTableModule } from 'ng2-handsontable';

import { routing } from './tables.routing';
import { Tables } from './tables.component';
import { MapsModule } from '../maps/maps.module';
import { OfficeTables } from './components/officeTables';
import { OfficeTablesService } from './components/officeTables/officeTables.service';
import { AtmTables } from './components/atmTables';
import { AtmTablesService } from './components/atmTables/atmTables.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    MapsModule,
    HotTableModule,
  ],
  declarations: [
    Tables,
    OfficeTables,
    AtmTables,
  ],
  providers: [
    OfficeTablesService,
    AtmTablesService,
  ],
})
export class TablesModule {
}
