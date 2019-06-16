import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLisingCalculatorComponent } from './credit-lising-calculator.component';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



import { Routes, RouterModule } from '@angular/router';
import { FinancialLogicService } from '../service/financial-logic.service';


export const routes: Routes = [
  { path: '', component: CreditLisingCalculatorComponent },
];

@NgModule({
  declarations: [
    CreditLisingCalculatorComponent
  ],
  imports: [
    CommonModule,
    Ng5SliderModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forChild(routes),

    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [ FinancialLogicService ]
})
export class CreditCalculatorModule { }
