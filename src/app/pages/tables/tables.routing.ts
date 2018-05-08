import { Routes, RouterModule } from '@angular/router';

import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { DataTables } from './components/dataTables/dataTables.component';
import { HotTablesComponent } from './components/hotTables/hotTables.component';
import { OfficeTables } from './components/officeTables/officeTables.component';
import { LineMaps } from '../maps/components/lineMaps';
import { AtmTables } from './components/atmTables';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'basictables', component: BasicTables },
      { path: 'smarttables', component: SmartTables },
      { path: 'datatables', component: DataTables },
      { path: 'officetables', component: OfficeTables },
      { path: 'atmTables', component: AtmTables },
      { path: 'hottables', component: HotTablesComponent }
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
