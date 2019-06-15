import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorToRequestService } from '../home/services/calculator-to-request.service';
import { SizeServiceService } from '../service/size-service.service';
import { Ng5SliderModule } from 'ng5-slider';
import { InstallmentCalculatorComponent } from './installment-calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: InstallmentCalculatorComponent },
];

@NgModule({
  declarations: [
    InstallmentCalculatorComponent
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
  providers: [
  ]
})
export class InstallmentCalculatorModule { }
