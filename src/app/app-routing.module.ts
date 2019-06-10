import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditLisingCalculatorComponent } from './home/pages/credit-lising-calculator/credit-lising-calculator.component';
import { InstallmentCalculatorComponent } from './home/pages/installment-calculator/installment-calculator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credit-calculator', component: CreditLisingCalculatorComponent },
  { path: 'installment-calculator', component: InstallmentCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
