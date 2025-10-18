import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admindashboard } from './admindashboard/admindashboard';
import { Addmanager } from './addmanager/addmanager';
import { Collateral } from './collateral/collateral';
import { Loantype } from './loantype/loantype';
import { Loanscheme } from './loanscheme/loanscheme';

const routes: Routes = [
  {
    path: '', component: Admindashboard,
    children: [
      { path: 'add-manager', component: Addmanager },
      { path: 'collaterals', component: Collateral },
      { path: 'loan-schemes', component: Loanscheme },
      { path: 'loan-types', component: Loantype }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
