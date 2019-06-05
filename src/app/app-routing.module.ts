import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditLisingCalculatorComponent } from './home/pages/credit-lising-calculator/credit-lising-calculator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: CreditLisingCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'} ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
