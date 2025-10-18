import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admindashboard } from './admindashboard/admindashboard';
import { Loanscheme } from './loanscheme/loanscheme';
import { Addmanager } from './addmanager/addmanager';
import { Collateral } from './collateral/collateral';
import { Loantype } from './loantype/loantype';


@NgModule({
  declarations: [
    Admindashboard,
    Loanscheme,
    Addmanager,
    Collateral,
    Loantype
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
