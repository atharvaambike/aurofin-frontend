import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing-module';
import { Requestedloans } from './requestedloans/requestedloans';
import { Managerdashboard } from './managerdashboard/managerdashboard';
import { ManagerProfile } from './manager-profile/manager-profile';



@NgModule({
  declarations: [
    Requestedloans,
    Managerdashboard,
    ManagerProfile
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
