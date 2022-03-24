import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { PaymentComponent } from './payment/payment.component';
import { UPITransactionComponent } from './upitransaction/upitransaction.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';



 
const routes: Routes = [
  {path:'', component: PaymentComponent},  
{path:'debitcard', component: DebitCardComponent},
{path:'netbanking', component: NetBankingComponent},
{path:'creditcard', component: CreditCardComponent},
{path:'upitransaction', component: UPITransactionComponent},
{path: 'printticket',component:PrintticketComponent},
{path:'reservation',component:ReservationComponent},
{path:'cancelbooking',component:CancelbookingComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
