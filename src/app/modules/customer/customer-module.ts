import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing-module';
import { Appliedloans } from './appliedloans/appliedloans';
import { Applyforloan } from './applyforloan/applyforloan';
import { Customerdashboard } from './customerdashboard/customerdashboard';
import { Viewloanschemes } from './viewloanschemes/viewloanschemes';
import { Customerprofile } from './customerprofile/customerprofile';
import { Payment } from './payment/payment';
import { ViewPayments } from './view-payments/view-payments';


@NgModule({
  declarations: [
    Appliedloans,
    Applyforloan,
    Customerdashboard,
    Viewloanschemes,
    Customerprofile,
    Payment,
    ViewPayments,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
