import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credit-calculator', loadChildren: './credit-calculator/credit-calculator.module#CreditCalculatorModule' },
  { path: 'installment-calculator', loadChildren: './installment-calculator/installment-calculator.module#InstallmentCalculatorModule'  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
