import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NetBankingComponent } from './net-banking/net-banking.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { UPITransactionComponent } from './upitransaction/upitransaction.component';
import { PaymentComponent } from './payment/payment.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';






@NgModule({
  declarations: [
    AppComponent,
    NetBankingComponent,
    DebitCardComponent,
    CreditCardComponent,
    UPITransactionComponent,
    PaymentComponent,
    PrintticketComponent,
    ReservationComponent,
    CancelbookingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
