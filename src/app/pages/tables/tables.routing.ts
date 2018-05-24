import { Routes, RouterModule } from '@angular/router';

import { Tables } from './tables.component';
import { OfficeTables } from './components/officeTables/officeTables.component';
import { LineMaps } from '../maps/components/lineMaps';
import { AtmTables } from './components/atmTables';

const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'officetables', component: OfficeTables },
      { path: 'atmTables', component: AtmTables },
      
    ],
  },
];

export const routing = RouterModule.forChild(routes);
