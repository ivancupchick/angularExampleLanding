import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { Ng5SliderModule } from 'ng5-slider';
import { PriceVisiblePipe } from './price-visible.pipe';
import { CreditLisingDifferenceComponent } from './pages/credit-lising-difference/credit-lising-difference.component';
import { InstallmentPlanComponent } from './pages/installment-plan/installment-plan.component';
import { HowSubmitComponent } from './pages/how-submit/how-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceVisiblePipe,
    CreditLisingDifferenceComponent,
    InstallmentPlanComponent,
    HowSubmitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatTooltipModule,
    NgbModule,
    Ng5SliderModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
